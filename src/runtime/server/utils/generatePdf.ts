import puppeteer from "puppeteer";

export const generatePdf = async (url: string): Promise<Buffer> => {
   const browser = await puppeteer.launch();
   const page = await browser.newPage();

   const response = await page.goto(url, { waitUntil: "networkidle0" });

   if (response!.status() === 404) {
      await browser.close();
      throw new Error("Document not found (404)");
   }

   const pdfBuffer = await page.pdf({
      preferCSSPageSize: true,
   });

   await browser.close();
   return pdfBuffer;
};
