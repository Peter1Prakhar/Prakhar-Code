const languageCodeMap: { [key: string]: number } = {
    cpp: 54,
    python: 92,
    java: 91,
    javascript: 93,
};

async function getSubmission(tokenId: string, callback: Function) {
    const url = `https://judge0-ce.p.rapidapi.com/submissions/${tokenId}?base64_encoded=true&fields=*`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '42400e8355msh69a5e033d9d7553p1204c4jsn91b19d33a10a',
            'x-rapidapi-host': 'judge0-ce.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log("Submission Result:", result);
        return result;
    } catch (error) {
        callback({
            apiStatus: 'error',
            message: JSON.stringify(error)
        });
    }
}

export async function makeSubmission(code: string, language: string, callback: Function, stdin: string) {
    const languageId = languageCodeMap[language.toLowerCase()];
    if (!languageId) {
        callback({
            apiStatus: 'error',
            message: 'Invalid language selected'
        });
        return;
    }

    const url = 'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=false&fields=*';
    const httpOptions = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': '42400e8355msh69a5e033d9d7553p1204c4jsn91b19d33a10a',
            'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            language_id: languageId,
            source_code: btoa(code),
            stdin: btoa(stdin),
        })
    };

    try {
        callback({ apiStatus: 'loading', message: 'Submitting code...' });
        const response = await fetch(url, httpOptions);

        if (!response.ok) {
            const errorText = await response.text();
            callback({
                apiStatus: 'error',
                message: `Error: ${response.status} - ${errorText}`
            });
            return;
        }

        const result = await response.json();
        console.log("Submission Response:", result);
        const tokenId = result.token;

        if (!tokenId) {
            callback({
                apiStatus: 'error',
                message: 'Submission failed, no token received'
            });
            return;
        }

        let statusCode = 1;
        let apiSubmissionResult;
        while (statusCode == 1 || statusCode == 2) {
            try {
                apiSubmissionResult = await getSubmission(tokenId, callback);
                statusCode = apiSubmissionResult.status?.id;
                if (!apiSubmissionResult || !apiSubmissionResult.status) {
                    callback({
                        apiStatus: 'error',
                        message: 'Invalid response structure from server'
                    });
                    return;
                }
            } catch (error) {
                callback({
                    apiStatus: 'error',
                    message: JSON.stringify(error)
                });
                return;
            }
        }

        if (apiSubmissionResult.status.id == 3) {
            callback({
                apiStatus: 'success',
                data: apiSubmissionResult,
                message: 'Code execution successful'
            });
        } else {
            callback({
                apiStatus: 'error',
                data: apiSubmissionResult,
                message: 'Code execution failed'
            });
        }

    } catch (error) {
        callback({
            apiStatus: 'error',
            message: JSON.stringify(error)
        });
    }
}
