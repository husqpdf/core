import puppeteer from "puppeteer";

type GeneratePdfOptions = {
  doc: string
  data: object
}

export const generatePdf = async (opts: GeneratePdfOptions): Promise<Buffer> => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  const documentPath = `http://localhost:3000/` + opts.doc;

  await page.evaluateOnNewDocument((opts: GeneratePdfOptions) => {
    const key = "__hqpdf_page_state_" + opts.doc
    const jsonData = JSON.stringify(opts.data)

    localStorage.setItem(key, jsonData)
  }, opts);

  const response = await page.goto(documentPath, {
    waitUntil: "networkidle0",
  });

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
