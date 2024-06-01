export async function getPdfFile(document: string, pageData: any): Promise<Uint8Array> {
  const response = await fetch(`/api/generate/${document}`, {
    method: "POST",
    body: JSON.stringify(pageData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const arrayBuf = await response.arrayBuffer();
  return new Uint8Array(arrayBuf);
}
