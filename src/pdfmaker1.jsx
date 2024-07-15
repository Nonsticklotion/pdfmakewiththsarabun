// import { useState, useRef } from "react";
// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";

// pdfMake.vfs = pdfFonts.pdfMake.vfs;

// pdfMake.fonts = {
//   THSarabunNew: {
//     normal: "THSarabunNew.ttf",
//     bold: "THSarabunNew Bold.ttf",
//     italics: "THSarabunNew Italic.ttf",
//     bolditalics: "THSarabunNew BoldItalic.ttf",
//   },
//   Roboto: {
//     normal: "Roboto-Regular.ttf",
//     bold: "Roboto-Medium.ttf",
//     italics: "Roboto-Italic.ttf",
//     bolditalics: "Roboto-MediumItalic.ttf",
//   },
// };
// const convertImageToBase64 = (file) => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });
// };

// const PdfMaker1 = () => {
//   const [pdfUrl, setPdfUrl] = useState("");
//   const iframeRef = useRef();

//   const data = {
//     id: "12345", // เลขที่
//     vn: "67890", // เลขที่ VN
//     doctor: {
//       firstName: "สมชาย",
//       lastName: "พงษ์สุข",
//     },
//     user: {
//       firstName: "ประยูร",
//       lastName: "ศรีสวัสดิ์",
//     },
//     hn: "11223344", // เลขที่ HN
//     weight: "70 kg", // น้ำหนัก
//     height: "175 cm", // ส่วนสูง
//     bloodPressure: "120/80 mmHg", // ความดัน
//     heartRate: "75 bpm", // ชีพจร
//     symptoms: "ปวดหัวและมีไข้สูง", // อาการ
//     medicines: [
//       { vn: "132365", medicine: { id: 11, name: "M1.5" }, quantity: 14 },
//       { vn: "132365", medicine: { id: 11, name: "M1.5" }, quantity: 14 },
//       { vn: "132365", medicine: { id: 11, name: "M1.5" }, quantity: 14 },
//       { vn: "132365", medicine: { id: 11, name: "M1.5" }, quantity: 14 },
//       { vn: "132365", medicine: { id: 11, name: "M1.5" }, quantity: 14 },
//       { vn: "132365", medicine: { id: 11, name: "M1.5" }, quantity: 14 },
//       // เพิ่มรายการยาอื่นๆ ที่นี่
//     ],
//   };

//   const getDocumentDefinition = (imageBase64) => ({
    
//     pageSize: "A4",
//     pageMargins: [40, 60, 40, 0], // [left, top, right, bottom]
//     content: [
//       { image: imageBase64, width: 150, alignment: "center" },
//       { text: `ใบวินิจฉัยโรค`, style: "header", margin: [0, 20, 0, 50] },
//       { text: `เลขที่ ${data.id}-${data.vn}`, alignment: "right" },
//       {
//         text: `ชื่อ ${data.doctor.firstName} ${data.doctor.lastName}`,
//         style: "subheader",
//       },
//       {
//         text: `ได้ทำการตรวจ คุณ${data.user.firstName} ${data.user.lastName} เลขที่ HN: ${data.hn}`,
//         margin: [0, 0, 0, 0],
//       },
//       {
//         text: `น้ำหนัก: ${data.weight} ส่วนสูง: ${data.height} ความดัน: ${data.bloodPressure} ชีพจร: ${data.heartRate}`,
//         margin: [0, 0, 0, 0],
//       },
//       {
//         text: `เมื่อวันที่ ${new Date().toLocaleDateString()}`,
//         margin: [0, 0, 0, 0],
//       },
//       { text: "สถานที่ตรวจ โรงพยาบาล Medisync hospital", margin: [0, 0, 0, 0] },
//       {
//         text: "สรุปผลความคิดเห็นของแพทย์",
//         margin: [0, 10, 0, 0],
//         style: "subheader",
//       },
//       { text: `${data.symptoms}`, margin: [0, 0, 0, 5] },
//       { text: "ยาที่ได้รับ", margin: [0, 10, 0, 0], style: "subheader" },
//       {
//         ul: data.medicines.map(
//           (medicine) => ` Medicine ID: ${medicine.medicineId}, Quantity: ${medicine.quantity}`
//         ),
//         margin: [0, 0, 0, 10],
//       },
//       {
//         text: ` □ เห็นสมควรให้ลาหยุดพักเพื่อรักษาตัว วันที่ `,
//         margin: [0, 10, 0, 10],
//       },
//       {
//         text: "รับรองว่ามารับการรักษาที่ ร.พ. จริง",
//         absolutePosition: { x: 60, y: 680 },
//         alignment: "left",
//       },
//       {
//         text: "ลงชื่อ",
//         absolutePosition: { x: 100, y: 760 },
//         alignment: "left",
//       },
//       {
//         text: "พิมพ์ผลวันที่ 12/07/2567",
//         absolutePosition: { x: 375, y: 760 },
//         alignment: "right",
//       },
//     ],
//     defaultStyle: {
//       font: "THSarabunNew",
//     },
//     styles: {
//       header: {
//         fontSize: 18,
//         bold: true,
//         alignment: "center",
//       },
//       subheader: {
//         fontSize: 14,
//         bold: true,
//       },
//     },
//   });

//   const createPdf = async () => {
//     try {
//       const imageUrl =
//         "https://res.cloudinary.com/didy6sdzf/image/upload/v1719565443/gcsen2pzeta7ybfurjus.jpg";
//       const imageResponse = await fetch(imageUrl);
//       const imageBlob = await imageResponse.blob();
//       const imageBase64 = await convertImageToBase64(imageBlob);

//       const documentDefinition = getDocumentDefinition(imageBase64);
//       const pdfDocGenerator = pdfMake.createPdf(documentDefinition);

//       pdfDocGenerator.getDataUrl(
//         (dataUrl) => {
//           setPdfUrl(dataUrl);
//           if (iframeRef.current) {
//             iframeRef.current.src = dataUrl;
//           }
//         },
//         (error) => {
//           console.error("Error generating PDF:", error);
//         }
//       );
//     } catch (error) {
//       console.error("Error creating PDF:", error);
//     }
//   };

//   const downloadPdf = async () => {
//     try {
//       const imageUrl =
//         "https://res.cloudinary.com/didy6sdzf/image/upload/v1719565443/gcsen2pzeta7ybfurjus.jpg";
//       const imageResponse = await fetch(imageUrl);
//       const imageBlob = await imageResponse.blob();
//       const imageBase64 = await convertImageToBase64(imageBlob);

//       const documentDefinition = getDocumentDefinition(imageBase64);
//       pdfMake
//         .createPdf(documentDefinition)
//         .download("mockup_a4.pdf", (error) => {
//           if (error) {
//             console.error("Error downloading PDF:", error);
//           }
//         });
//     } catch (error) {
//       console.error("Error downloading PDF:", error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={createPdf}>Create PDF</button>
//       <button onClick={downloadPdf}>Download PDF</button>
//       <iframe
//         ref={iframeRef}
//         style={{ width: "100%", height: "1000px", marginTop: "20px" }}
//         title="PDF Preview"
//         src={pdfUrl}
//       />
//     </div>
//   );
// };

// export default PdfMaker1;


import { useState, useRef } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

pdfMake.fonts = {
  THSarabunNew: {
    normal: "THSarabunNew.ttf",
    bold: "THSarabunNew Bold.ttf",
    italics: "THSarabunNew Italic.ttf",
    bolditalics: "THSarabunNew BoldItalic.ttf",
  },
  Roboto: {
    normal: "Roboto-Regular.ttf",
    bold: "Roboto-Medium.ttf",
    italics: "Roboto-Italic.ttf",
    bolditalics: "Roboto-MediumItalic.ttf",
  },
};
// const convertImageToBase64 = (file) => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });
// };

const convertImageToBase64 = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(xhr.response);
    };
    xhr.onerror = (error) => reject(error);
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  });
};

const PdfMaker1 = () => {
  const [pdfUrl, setPdfUrl] = useState("");
  const iframeRef = useRef();

  const data = {
    id: "12345", // เลขที่
    vn: "67890", // เลขที่ VN
    doctor: {
      firstName: "สมชาย",
      lastName: "พงษ์สุข",
    },
    user: {
      firstName: "ประยูร",
      lastName: "ศรีสวัสดิ์",
    },
    hn: "11223344", // เลขที่ HN
    weight: "70 kg", // น้ำหนัก
    height: "175 cm", // ส่วนสูง
    bloodPressure: "120/80 mmHg", // ความดัน
    heartRate: "75 bpm", // ชีพจร
    symptoms: "ปวดหัวและมีไข้สูง", // อาการ
    medicines: [
      { vn: "132365", medicine: { id: 11, name: "M1.5" }, quantity: 14 },
      { vn: "132365", medicine: { id: 11, name: "M1.5" }, quantity: 14 },
      { vn: "132365", medicine: { id: 11, name: "M1.5" }, quantity: 14 },
      { vn: "132365", medicine: { id: 11, name: "M1.5" }, quantity: 14 },
      { vn: "132365", medicine: { id: 11, name: "M1.5" }, quantity: 14 },
      { vn: "132365", medicine: { id: 11, name: "M1.5" }, quantity: 14 },
      { vn: "132365", medicine: { id: 11, name: "M1.5" }, quantity: 14 },
      // เพิ่มรายการยาอื่นๆ ที่นี่
    ],
  };

  const getDocumentDefinition = (imageBase64) => {
    // สร้างรายการยา
    const medicineList = data.medicines.map((med, index) => {
      return ` ${med.medicine.name} จำนวน: ${med.quantity}`;
    });

    return {
      pageSize: "A4",
      pageMargins: [40, 60, 40, 0], // [left, top, right, bottom]
      content: [
        { image: imageBase64, width: 150, alignment: "center" },
        { text: `ใบวินิจฉัยโรค`, style: "header", margin: [0, 20, 0, 50] },
        { text: `เลขที่ ${data.id}-${data.vn}`, alignment: "right" },
        {
          text: `ชื่อ ${data.doctor.firstName} ${data.doctor.lastName}`,
          style: "subheader",
        },
        {
          text: `ได้ทำการตรวจ คุณ${data.user.firstName} ${data.user.lastName} เลขที่ HN: ${data.hn}`,
          margin: [0, 0, 0, 0],
        },
        {
          text: `น้ำหนัก: ${data.weight} ส่วนสูง: ${data.height} ความดัน: ${data.bloodPressure} ชีพจร: ${data.heartRate}`,
          margin: [0, 0, 0, 0],
        },
        {
          text: `เมื่อวันที่ ${new Date().toLocaleDateString()}`,
          margin: [0, 0, 0, 0],
        },
        { text: "สถานที่ตรวจ โรงพยาบาล Medisync hospital", margin: [0, 0, 0, 0] },
        {
          text: "สรุปผลความคิดเห็นของแพทย์",
          margin: [0, 10, 0, 0],
          style: "subheader",
        },
        { text: `${data.symptoms}`, margin: [0, 0, 0, 5] },
        { text: "ยาที่ได้รับ", margin: [0, 10, 0, 0], style: "subheader" },
        {
          ol: medicineList, // แสดงรายการยา
          margin: [0, 0, 0, 10],
        },
        {
          text: ` □ เห็นสมควรให้ลาหยุดพักเพื่อรักษาตัว วันที่ `,
          margin: [0, 10, 0, 10],
        },
        {
          text: "รับรองว่ามารับการรักษาที่ ร.พ. จริง",
          absolutePosition: { x: 60, y: 680 },
          alignment: "left",
        },
        {
          text: "ลงชื่อ",
          absolutePosition: { x: 100, y: 760 },
          alignment: "left",
        },
        {
          text: "พิมพ์ผลวันที่ 12/07/2567",
          absolutePosition: { x: 375, y: 760 },
          alignment: "right",
        },
      ],
      defaultStyle: {
        font: "THSarabunNew",
      },
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: "center",
        },
        subheader: {
          fontSize: 14,
          bold: true,
        },
      },
    };
  };

  const createPdf = async () => {
    try {
      // const imageUrl =
      //   "https://res.cloudinary.com/didy6sdzf/image/upload/v1719565443/gcsen2pzeta7ybfurjus.jpg";
      // const imageResponse = await fetch(imageUrl);
      // const imageBlob = await imageResponse.blob();
      // const imageBase64 = await convertImageToBase64(imageBlob);
      const imageUrl = "../public/MediSync-new.jpg"; // แทนที่ด้วย URL หรือ path ของภาพของคุณ
      const imageBase64 = await convertImageToBase64(imageUrl);

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

  const downloadPdf = async () => {
    try {
      // const imageUrl =
      //   "https://res.cloudinary.com/didy6sdzf/image/upload/v1719565443/gcsen2pzeta7ybfurjus.jpg";
      // const imageResponse = await fetch(imageUrl);
      // const imageBlob = await imageResponse.blob();
      // const imageBase64 = await convertImageToBase64(imageBlob);
      const imageUrl = "../public/MediSync-new.jpg"; // แทนที่ด้วย URL หรือ path ของภาพของคุณ
      const imageBase64 = await convertImageToBase64(imageUrl);

      const documentDefinition = getDocumentDefinition(imageBase64);
      pdfMake
        .createPdf(documentDefinition)
        .download("mockup_a4.pdf", (error) => {
          if (error) {
            console.error("Error downloading PDF:", error);
          }
        });
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return (
    <div>
      <button onClick={createPdf}>Create PDF</button>
      <button onClick={downloadPdf}>Download PDF</button>
      <iframe
        ref={iframeRef}
        style={{ width: "100%", height: "1000px", marginTop: "20px" }}
        title="PDF Preview"
        src={pdfUrl}
      />
    </div>
  );
};

export default PdfMaker1;
