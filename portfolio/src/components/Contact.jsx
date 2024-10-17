import React, { useState } from 'react';

export function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        honeypot: '', // For bot prevention
    });
    const [status, setStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const submitForm = async (e) => {
        e.preventDefault();

        if (!accessKey) {
            console.error('Access key is missing.');
            setStatus('ERROR');
            return;
        }

        // Prepare data to be sent
        const data = { ...formData, access_key: accessKey };

        try {
            setIsLoading(true);

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('SUCCESS');
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                    honeypot: '',
                });
            } else {
                console.error(result.message);
                setStatus('ERROR');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            setStatus('ERROR');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center bg-gray-900">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 sm:p-12 rounded shadow">
                    <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
                        Contact Me
                    </h1>
                    {status === 'SUCCESS' && (
                        <div className="mb-4 text-green-500">
                            Your message has been sent successfully.
                        </div>
                    )}
                    {status === 'ERROR' && (
                        <div className="mb-4 text-red-500">
                            Oops! Something went wrong. Please try again.
                        </div>
                    )}
                    <form onSubmit={submitForm}>
                        {/* Honeypot Field */}
                        <input
                            type="text"
                            name="honeypot"
                            value={formData.honeypot}
                            onChange={handleChange}
                            className="hidden"
                        />
                        {/* Name Field */}
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-gray-700 dark:text-gray-200 font-bold mb-2"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring bg-gray-300 text-black"
                            />
                        </div>
                        {/* Email Field */}
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 dark:text-gray-200 font-bold mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring bg-gray-300 text-black"
                            />
                        </div>
                        {/* Message Field */}
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="block text-gray-700 dark:text-gray-200 font-bold mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring bg-gray-300 text-black"
                            ></textarea>
                        </div>
                        {/* Submit Button */}
                        <div className="text-right">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="px-6 py-2 bg-blue-600 text-white font-bold rounded shadow hover:bg-blue-700 focus:outline-none focus:ring disabled:opacity-50"
                            >
                                {isLoading ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
