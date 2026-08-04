import { useCallback } from 'react';

const API_Base = import.meta.env.VITE_API_URL;

export const useApi = () => {
    const request = useCallback(async (endpoint: string, options: RequestInit = {}) => {
        try {
            const headers = {
                'Content-Type': 'application/json',
                ...options.headers,
            };

            const response = await fetch(`${API_Base}/${endpoint}`, {
                ...options,
                headers,
            });

            if (!response.ok) {
                throw new Error(`API error: ${response.statusText}`);
            }

            // Check for 204 No Content
            if (response.status === 204) return null;

            return await response.json();
        } catch (error) {
            console.error('API Request Failed:', error);
            throw error;
        }
    }, []);

    return { request };
};
