import {
  defineEventHandler,
  getRouterParam,
  setResponseStatus,
  setResponseHeaders,
  readBody,
  send
} from "h3";
import {toQueryString} from "../../utils/toQueryString";
import {generatePdf} from "../../utils/generatePdf";

export default defineEventHandler(async (event) => {
   try {
      const document = getRouterParam(event, "document");
      const body = await readBody(event);

      if (!document) {
         setResponseStatus(event, 400);
         return { error: "document name is required" };
      }
      const documentPath = `http://localhost:3000/${document}?${toQueryString(body)}`;

      const pdfBuffer = await generatePdf(documentPath);

      setResponseHeaders(event, {
         "Content-Type": "application/pdf",
         "Content-Disposition": `attachment; filename="${document}.pdf"`,
      });

      return send(event, pdfBuffer);
   } catch (error) {
      console.error(error);
      setResponseStatus(event, 500);
      return { error: "Failed to generate PDF" };
   }
});
