import State from "./state";

class Print extends State
{
    private previousTitle!: string;
    private cssStyleSheet(size?: [number, number] | string): string
    {
        return (`
            html,
            body{
                padding: 0;
                margin: 0;
                background-color: #fff;
            }
            @page{
                size: ${size ? size : 'auto'};
                margin: 10px;
            }
            @media print
            {
                footer,
                header{
                    display: none;
                }
                thead,
                tfoot{
                    display: table-row-group;
                }
            }
        `);
    }

    private htmlHeader(_title?: string, size?: [number, number] | string): HTMLIFrameElement
    {
        const iframe: HTMLIFrameElement = document.createElement('iframe');
        document.body.appendChild(iframe);
        const iframeDocuments: Document | undefined = iframe?.contentDocument || iframe?.contentWindow?.document;
        const links: Element[] = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
        const styles: string = Array.from(document.styleSheets).map((sheet: CSSStyleSheet): string => {
            try
            {
                return Array.from(sheet?.cssRules || []).map(rule => rule?.cssText).join('\n');
            }
            catch(e: unknown)
            {
                console.warn('Could not access stylesheet:', sheet?.href);
                return '';
            }
        }).join('\n');

        if(iframeDocuments)
        {
            const title: HTMLTitleElement = document?.createElement('title');
            this.previousTitle = document.title;
            if(_title)
            {
                document.title = _title;
            }
            title.textContent = document.title;
            const meta_1: HTMLMetaElement = document?.createElement('meta');
            meta_1.setAttribute('charset', 'UTF-8');
            meta_1.setAttribute('http-equiv', 'Content-Type');
            const meta_2: HTMLMetaElement = document?.createElement('meta');
            meta_2.setAttribute('name', 'viewport');
            meta_2.setAttribute('content', 'width=device-width, initial-scale=1.0');
            iframeDocuments?.head?.append(title, meta_1, meta_2);
            links.forEach((link: Element): void => {
                const iframeLink: HTMLLinkElement = iframeDocuments?.createElement("link");
                iframeLink.setAttribute('rel', 'stylesheet');
                iframeLink.setAttribute('type', 'text/css');
                iframeLink.href = (link as HTMLLinkElement).href;
                iframeDocuments.head.appendChild(iframeLink);
            });
            const style: HTMLStyleElement = iframeDocuments?.createElement('style');
            style.textContent = (styles+this.cssStyleSheet(size));
            style.setAttribute('type', 'text/css');
            iframeDocuments?.head?.appendChild(style);
        }
        return iframe;
    }

    public async print(htmlContent: string, title?: string, size?: [number, number] | string): Promise<void>
    {
        const iframe: HTMLIFrameElement = this.htmlHeader(title, size);

        const iframeDocuments: Document | undefined = iframe?.contentDocument || iframe?.contentWindow?.document;
        if(iframe.contentWindow)
        {
            if(iframeDocuments)
            {
                iframeDocuments.body.innerHTML = htmlContent || '';
            }
            const previousTitle: string = this.previousTitle;
            const images: HTMLImageElement[] = Array.from(iframeDocuments?.querySelectorAll('img') || []);
            const imagePromises: Promise<unknown>[] = images.map((img: HTMLImageElement): Promise<unknown> => {
                return new Promise((resolve): void => {
                    if(img.complete)
                    {
                        resolve(null);
                    }
                    else
                    {
                        img.onload = resolve;
                        img.onerror = resolve;
                    }
                });
            });
            await Promise.all(imagePromises);
            iframe.contentWindow.onafterprint = function()
            {
                setTimeout((): void => {
                    iframe?.contentWindow?.close();
                    document?.body?.removeChild(iframe);
                    document.title = previousTitle;
                },1000);
            }
            iframe?.contentWindow?.print();
            iframe?.contentWindow?.focus();
        }
    }
}

export default Print;