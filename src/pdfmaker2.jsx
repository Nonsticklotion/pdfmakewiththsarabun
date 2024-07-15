// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
// import svg2img from "svg2img";

// pdfMake.vfs = pdfFonts.pdfMake.vfs;

// const generatePDF = () => {
//   const svgCode =
//     '<svg height="100" width="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /></svg>';

//   // แปลง SVG เป็น base64 image
//   svg2img(svgCode, (error, buffer) => {
//     if (error) {
//       console.error("Error converting SVG:", error);
//       return;
//     }

//     const base64Image = buffer.toString("base64");

//     // สร้างเอกสาร PDF ด้วย pdfmake
//     const docDefinition = {
//       content: [
//         {
//           text: "Here is the SVG as an image:",
//           margin: [0, 0, 0, 10],
//         },
//         {
//           image: "data:image/png;base64," + base64Image,
//           width: 100,
//           height: 100,
//         },
//       ],
//     };

//     // สร้าง PDF และดาวน์โหลด
//     pdfMake.createPdf(docDefinition).download("document.pdf");
//   });
// };

// const PdfMaker2 = () => {
//   return (
//     <div>
//       <button onClick={createPdf}>Create PDF</button>
//       <iframe
//         ref={iframeRef}
//         style={{ width: "100%", height: "1000px", marginTop: "20px" }}
//         title="PDF Preview"
//         src={pdfUrl}
//       />
//     </div>
//   );
// };

// export default PdfMaker2;

import { useState, useRef } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const App = () => {
  const [pdfUrl, setPdfUrl] = useState("");
  const iframeRef = useRef(null);

  const convertImageToBase64 = (imageBlob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(imageBlob);
    });
  };

  const getDocumentDefinition = (imageBase64) => {
    return {
      content: [
        {
          text: "Here is the image:",
          margin: [0, 0, 0, 10],
        },
        {
          image: imageBase64,
          width: 150,
          
        },
      ],
    };
  };

  const createPdf = async () => {
    try {
      const imageUrl =
        "https://res.cloudinary.com/didy6sdzf/image/upload/v1719565443/gcsen2pzeta7ybfurjus.jpg";
      const imageResponse = await fetch(imageUrl);
      const imageBlob = await imageResponse.blob();
      const imageBase64 = await convertImageToBase64(imageBlob);

      const documentDefinition = getDocumentDefinition(imageBase64);
      const pdfDocGenerator = pdfMake.createPdf(documentDefinition);

      pdfDocGenerator.getDataUrl(
        (dataUrl) => {
          setPdfUrl(dataUrl);
          if (iframeRef.current) {
            iframeRef.current.src = dataUrl;
          }
        },
        (error) => {
          console.error("Error generating PDF:", error);
        }
      );
    } catch (error) {
      console.error("Error creating PDF:", error);
    }
  };

  return (
    <div>
      <button onClick={createPdf}>Generate PDF</button>
      <iframe ref={iframeRef} src={pdfUrl} width="600" height="400" />
    </div>
  );
};

export default App;
