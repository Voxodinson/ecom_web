const Copy = async (text: string): Promise<string> => {
    try
    {
        await navigator.clipboard.writeText(text);
        return 'Text copied to clipboard!';
    }
    catch(err)
    {
        console.error('Failed to copy text: ', err);
        return 'Failed to copy text!';
    }
}

export default Copy;