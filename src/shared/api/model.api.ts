class ApiResponse {
    /**
     * makeRequest<T, U>
     */
    public async makeRequest<T, U>(
        url: string,
        method: string,
        data?: U,
        headersList?: Headers,
    ): Promise<T> {
        const raw = JSON.stringify(data);
        const options: RequestInit = {
            method: method,
            headers: headersList,
            body: raw,
            redirect: 'follow',
        };
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Failed to make API request');
            }
            const responseData = await response.json();
            return responseData as T;
        } catch (error) {
            throw new Error(`Error: ${error}`);
        }
    }
}
export default ApiResponse;
