// import { useState, useRef } from "react";
// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
// import mediSync from "./assets/MediSync-1.svg";

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

// function svgToBase64(svgContent) {
//   return `data:image/svg+xml;base64,${btoa(
//     unescape(encodeURIComponent(svgContent))
//   )}`;
// }
// const PdfMaker = () => {
//   const [pdfUrl, setPdfUrl] = useState("");
//   const iframeRef = useRef();

//   const tableData = [
//     { description: "เจาะเลือด", quantity: 1, cost: 20000 },
//     { description: "เจาะเลือด", quantity: 1, cost: 20000 },
//     { description: "เจาะเลือด", quantity: 1, cost: 20000 },
//     { description: "เจาะเลือด", quantity: 1, cost: 20000 },
//     { description: "เจาะเลือด", quantity: 1, cost: 20000 },
//     { description: "เจาะเลือด", quantity: 1, cost: 20000 },
//     { description: "เจาะเลือด", quantity: 1, cost: 20000 },
//     { description: "เจาะเลือด", quantity: 1, cost: 20000 },
//     { description: "เจาะเลือด", quantity: 1, cost: 20000 },
//     { description: "เจาะเลือด", quantity: 1, cost: 20000 },
//     { description: "เจาะเลือด", quantity: 1, cost: 20000 },
//     { description: "เจาะเลือด", quantity: 1, cost: 20000 },
//     { description: "เจาะเลือด", quantity: 1, cost: 20000 },
//     { description: "เจาะเลือด", quantity: 1, cost: 20000 },
//     { description: "เจาะเลือด", quantity: 1, cost: 20000 },
//     { description: "เจาะเลือด", quantity: 1, cost: 20000 },
//     { description: "เจาะเลือด", quantity: 1, cost: 20000 },
//     { description: "เจาะเลือด", quantity: 1, cost: 20000 },
//     { description: "เจาะเลือด", quantity: 1, cost: 20000 },
//     { description: "เจาะเลือด", quantity: 1, cost: 20000 },
//     { description: "เจาะเลือด", quantity: 1, cost: 20000 },
//     { description: "เจาะเลือด", quantity: 1, cost: 20000 },
//     // เพิ่มแถวอื่นๆ ตามต้องการ
//   ];

//   const calculateTotalCost = (data) => {
//     return data.reduce((acc, item) => acc + item.cost, 0);
//   };

//   const formatCurrency = (value) => {
//     return new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(value);
//   };

//   const totalCost = calculateTotalCost(tableData);
//     const formattedTotalCost = formatCurrency(totalCost);

//   const tableBody = tableData.map((row, index) => [
//     {
//       text: `${index + 1}.`,
//       alignment: "center",
//       margin: [5, 5, 5, 5],
//       fontSize: 14,
//     },
//     {
//       text: `${row.description}`,
//       margin: [5, 5, 5, 5],
//       fontSize: 14,
//     },
//     {
//       text: row.quantity.toString(),
//       alignment: "center",
//       margin: [10, 5, 10, 0],
//     },
//     {
//       text: row.cost.toFixed(2),
//       margin:
//         tableData.length < 5 && index === tableData.length - 1
//           ? [10, 5, 10, 300]
//           : [10, 5, 10, 0],
//     },
//   ]);
//   const svgBase64 = svgToBase64(mediSync);
// const  firstName = "test01"
// const  lastName = "test01"
// const  HN = "test01"
// const  VN = "test01"
// const  date = "test01"
//   const getDocumentDefinition = (imageBase64) => ({
//     pageSize: "A4",
//     pageMargins: [40, 60, 40, 60], // [left, top, right, bottom]
//     content: [
//       {
//         image: imageBase64, // ใส่ Base64 ของโลโก้ที่นี่
//         width: 150,
//         alignment: "center",
//       },
//       // {
//       //   svg: svgBase64, // ใส่ Base64 ของโลโก้ที่นี่
//       //   width: 150,
//       // },
//       {
//         text: `ชื่อ: ${firstName} ${lastName}    HN: ${HN}    เลขที่ใบเสร็จ: ${VN}`,
//         style: "header",
//         margin: [0, 20, 20, 0],
//       },
//       {
//         text: `วันที่เข้ารับการรักษา: ${date}`,
//         style: "header",
//       },
//       {
//         table: {
//           headerRows: 1,
//           widths: ["auto", "*", "auto", "auto"],
//           body: [
//             [
//               {
//                 text: "ลำดับ",
//                 style: "tableHeader",
//                 alignment: "center",
//                 fontSize: 14,
//               },
//               {
//                 text: "รายการ",
//                 style: "tableHeader",
//                 margin: [5, 0, 0, 0],
//                 fontSize: 14,
//               },
//               {
//                 text: "จำนวน",
//                 style: "tableHeader",
//                 margin: [5, 0, 10, 0],
//                 fontSize: 14,
//               },
//               {
//                 text: "ค่าใช้จ่าย",
//                 style: "tableHeader",
//                 margin: [5, 0, 10, 0],
//                 fontSize: 14,
//               },
//             ],
//             ...tableBody,
//             [
//               {
//                 text: "รวมค่าใช้จ่ายทั้งหมด",
//                 colSpan: 3,
//                 alignment: "left",
//                 fontSize: 16,
//                 margin: [10, 10, 10, 10],
//               },
//               {},
//               {},
//               {
//                 text: formattedTotalCost,
//                 fontSize: 16,
//                 margin: [10, 10, 10, 10], // ตั้งค่า margin ที่นี่
//               },
//             ],
//           ],
//         },
//         layout: {
//           hLineWidth: function (i, node) {
//             if (i === 0 || i === node.table.body.length) {
//               return 1; // เส้นขอบบนและล่างของตาราง
//             }
//             if (i === node.table.body.length - 1 || i === 1) {
//               return 1; // เส้นขอบบนของแถว "รวมค่าใช้จ่ายทั้งหมด" และเส้นขอบล่างของหัวตาราง
//             }
//             return 0; // ไม่มีเส้นขอบระหว่างแถว
//           },
//           vLineWidth: function (i, node) {
//             return 1; // เส้นขอบซ้ายและขวาของตาราง และคอลัมน์ทั้งหมด
//           },
//           hLineColor: function (i, node) {
//             if (i === 0 || i === node.table.body.length) {
//               return "black"; // เส้นขอบบนและล่างของตาราง
//             }
//             if (i === node.table.body.length - 1 || i === 1) {
//               return "black"; // เส้นขอบบนของแถว "รวมค่าใช้จ่ายทั้งหมด" และเส้นขอบล่างของหัวตาราง
//             }
//             return "white"; // ไม่มีสีเส้นขอบระหว่างแถว
//           },
//           vLineColor: function (i, node) {
//             return "black"; // เส้นขอบซ้ายและขวาของตาราง และคอลัมน์ทั้งหมด
//           },
//         },
//       },
//       {
//         text: "ลงชื่อผู้ออกใบเสร็จ",
//         absolutePosition: { x: 30, y: 700 },
//         alignment: "left",
//       },
//       {
//         text: `พิมพ์ผลวันที่ ${date}`,
//         absolutePosition: { x: 375, y: 700 },
//         alignment: "right",
//       },
//     ],
//     defaultStyle: {
//       font: "THSarabunNew",
//     },
//     styles: {
//       header: {
//         fontSize: 14,
//         bold: true,
//         margin: [0, 0, 0, 10],
//       },
//       subheader: {
//         fontSize: 14,
//         bold: true,
//         margin: [0, 10, 0, 5],
//       },
//       body: {
//         fontSize: 14,
//         margin: [0, 5, 0, 5],
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
//       console.log(pdfDocGenerator);
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

// export default PdfMaker;

// ksandkjshajdhscgdshgckdsbchdsvhdsj/////////////////

// import { useState, useRef } from "react";
// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
// import mediSync from "./assets/MediSync-1.svg";

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

// function svgToBase64(svgContent) {
//   return `data:image/svg+xml;base64,${btoa(
//     unescape(encodeURIComponent(svgContent))
//   )}`;
// }

// const PdfMaker = () => {
//   const [pdfUrl, setPdfUrl] = useState("");
//   const iframeRef = useRef();

//   const data = [
//     {
//       vn: "132365",
//       medicine: { id: 11, name: "M1.5", price: "15.6" },
//       quantity: 14,
//     },
//     {
//       vn: "132366",
//       medicine: { id: 12, name: "M2.5", price: "20.0" },
//       quantity: 20,
//     },
//     {
//       vn: "132367",
//       medicine: { id: 13, name: "M3.5", price: "10.0" },
//       quantity: 30,
//     },
//     // เพิ่มรายการยาอื่นๆ ที่นี่
//   ];

//   const calculateTotalCost = (data) => {
//     return data.reduce(
//       (acc, item) => acc + parseFloat(item.medicine.price) * item.quantity,
//       0
//     );
//   };

//   const totalCost = calculateTotalCost(data).toFixed(2);

//   const tableBody = data.map((row, index) => [
//     {
//       text: (index + 1).toString(),
//       margin: [5, 5, 5, 5],
//       fontSize: 14,
//     },
//     {
//       text: `${row.medicine.name}`,
//       margin: [5, 5, 5, 5],
//       fontSize: 14,
//     },
//     {
//       text: row.quantity.toString(),
//       margin: [10, 5, 10, 0],
//     },
//     {
//       text: parseFloat(row.medicine.price).toFixed(2),
//       margin: [10, 5, 10, 0],
//     },
//     {
//       text: (parseFloat(row.medicine.price) * row.quantity).toFixed(2),
//       margin: [10, 5, 10, 0],
//     },
//   ]);

//   const svgBase64 = svgToBase64(mediSync);
//   const firstName = "test";
//   const lastName = "test";
//   const HN = "test";
//   const VN = "test";
//   const date = "test";

//   const getDocumentDefinition = (imageBase64) => ({
//     pageSize: "A4",
//     pageMargins: [40, 60, 40, 60], // [left, top, right, bottom]
//     content: [
//       {
//         image: imageBase64, // ใส่ Base64 ของโลโก้ที่นี่
//         width: 150,
//         alignment: "center",
//       },
//       {
//         text: `ชื่อ: ${firstName} ${lastName}    HN: ${HN}    เลขที่ใบเสร็จ: ${VN}`,
//         style: "header",
//         margin: [0, 20, 20, 0],
//       },
//       {
//         text: `วันที่เข้ารับการรักษา: ${date}`,
//         style: "header",
//       },
//       {
//         table: {
//           headerRows: 1,
//           widths: ["auto", "*", "auto", "auto", "auto"],
//           body: [
//             [
//               {
//                 text: "ลำดับ",
//                 style: "tableHeader",
//                 margin: [0, 0, 0, 0],
//                 fontSize: 14,
//               },
//               {
//                 text: "รายการ",
//                 style: "tableHeader",
//                 margin: [5, 0, 0, 0],
//                 fontSize: 14,
//               },
//               {
//                 text: "จำนวน",
//                 style: "tableHeader",
//                 margin: [5, 0, 10, 0],
//                 fontSize: 14,
//               },
//               {
//                 text: "ราคาต่อหน่วย",
//                 style: "tableHeader",
//                 margin: [5, 0, 10, 0],
//                 fontSize: 14,
//               },
//               {
//                 text: "ราคารวม",
//                 style: "tableHeader",
//                 margin: [5, 0, 10, 0],
//                 fontSize: 14,
//               },
//             ],
//             ...tableBody, // แสดงรายการยาและจำนวนที่ได้รับพร้อมลำดับและราคาทั้งหมด
//             [
//               {
//                 text: "รวมทั้งหมด",
//                 colSpan: 4,
//                 alignment: "right",
//                 margin: [5, 5, 5, 5],
//                 fontSize: 14,
//                 bold: true,
//               },
//               {},
//               {},
//               {},
//               {
//                 text: totalCost,
//                 margin: [10, 5, 10, 0],
//                 fontSize: 14,
//                 bold: true,
//               },
//             ],
//           ],
//         },
//         layout: {
//           hLineWidth: function (i, node) {
//             // วาดเส้น row แค่ 2 เส้นแรก
//             return i < 2 ? 1 : 0;
//           },
//           vLineWidth: function (i, node) {
//             // ไม่วาดเส้น column
//             return 0;
//           },
//           hLineColor: function (i, node) {
//             return "black";
//           },
//           vLineColor: function (i, node) {
//             return "black";
//           },
//           paddingLeft: function (i, node) {
//             return 10;
//           },
//           paddingRight: function (i, node) {
//             return 10;
//           },
//           paddingTop: function (i, node) {
//             return 5;
//           },
//           paddingBottom: function (i, node) {
//             return 5;
//           },
//         },
//       },
//       {
//         text: "ลงชื่อผู้ออกใบเสร็จ",
//         absolutePosition: { x: 30, y: 700 },
//         alignment: "left",
//       },
//       {
//         text: `พิมพ์ผลวันที่ ${date}`,
//         absolutePosition: { x: 375, y: 700 },
//         alignment: "right",
//       },
//     ],
//     defaultStyle: {
//       font: "THSarabunNew",
//     },
//     styles: {
//       header: {
//         fontSize: 14,
//         bold: true,
//         margin: [0, 0, 0, 10],
//       },
//       subheader: {
//         fontSize: 14,
//         bold: true,
//         margin: [0, 10, 0, 5],
//       },
//       body: {
//         fontSize: 14,
//         margin: [0, 5, 0, 5],
//       },
//       tableHeader: {
//         bold: true,
//         fontSize: 14,
//         color: "black",
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

// export default PdfMaker;

import { useState, useRef } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import mediSync from "./assets/MediSync-1.svg";

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

// function svgToBase64(svgContent) {
//   return `data:image/svg+xml;base64,${btoa(
//     unescape(encodeURIComponent(svgContent))
//   )}`;
// }

const PdfMaker = () => {
  const [pdfUrl, setPdfUrl] = useState("");
  const iframeRef = useRef();

  const data = {
    bloodPressure: null,
    clinic: {
      id: 1,
      name: "C1",
      detail: "a",
      image: null,
      createdAt: "2024-07-07T12:11:40.000Z",
    },
    diagnosis: "DDDDdddDDDDDDDD",
    doctor: {
      id: 2,
      clinicId: 1,
      firstName: "D2",
      lastName: "C1",
      birthDate: null,
    },
    doctorId: 2,
    heartRate: null,
    height: null,
    hn: "HN373929",
    id: 2,
    medicineOrders: [
      {
        vn: "132365",
        medicine: { id: 11, name: "M1.5", price: "15.6" },
        quantity: 14,
      },
      {
        vn: "132366",
        medicine: { id: 12, name: "M2.5", price: "20.0" },
        quantity: 20,
      },
      {
        vn: "132367",
        medicine: { id: 13, name: "M3.5", price: "10.0" },
        quantity: 30,
      },
      {
        vn: "132367",
        medicine: { id: 13, name: "M3.5", price: "10.0" },
        quantity: 30,
      },
      {
        vn: "132367",
        medicine: { id: 13, name: "M3.5", price: "10.0" },
        quantity: 30,
      },
      {
        vn: "132367",
        medicine: { id: 13, name: "M3.5", price: "10.0" },
        quantity: 30,
      },
      {
        vn: "132367",
        medicine: { id: 13, name: "M3.5", price: "10.0" },
        quantity: 30,
      },
      {
        vn: "132367",
        medicine: { id: 13, name: "M3.5", price: "10.0" },
        quantity: 30,
      },
      {
        vn: "132367",
        medicine: { id: 13, name: "M3.5", price: "10.0" },
        quantity: 30,
      },
      {
        vn: "132367",
        medicine: { id: 13, name: "M3.5", price: "10.0" },
        quantity: 30,
      },
      {
        vn: "132367",
        medicine: { id: 13, name: "M3.5", price: "10.0" },
        quantity: 30,
      },
      {
        vn: "132367",
        medicine: { id: 13, name: "M3.5", price: "10.0" },
        quantity: 30,
      },
      {
        vn: "132367",
        medicine: { id: 13, name: "M3.5", price: "10.0" },
        quantity: 30,
      },
      {
        vn: "132367",
        medicine: { id: 13, name: "M3.5", price: "10.0" },
        quantity: 30,
      },
      {
        vn: "132367",
        medicine: { id: 13, name: "M3.5", price: "10.0" },
        quantity: 30,
      },
      {
        vn: "132367",
        medicine: { id: 13, name: "M3.5", price: "10.0" },
        quantity: 30,
      },
      {
        vn: "132367",
        medicine: { id: 13, name: "M3.5", price: "10.0" },
        quantity: 30,
      },
      {
        vn: "132367",
        medicine: { id: 13, name: "M3.5", price: "10.0" },
        quantity: 30,
      },
      {
        vn: "132367",
        medicine: { id: 13, name: "M3.5", price: "10.0" },
        quantity: 30,
      },
      {
        vn: "132367",
        medicine: { id: 13, name: "M3.5", price: "10.0" },
        quantity: 30,
      },
      {
        vn: "132367",
        medicine: { id: 13, name: "M3.5", price: "10.0" },
        quantity: 30,
      },
      {
        vn: "132367",
        medicine: { id: 13, name: "M3.5", price: "10.0" },
        quantity: 30,
      },
      {
        vn: "132367",
        medicine: { id: 13, name: "M3.5", price: "10.0" },
        quantity: 30,
      },
      {
        vn: "132367",
        medicine: { id: 13, name: "M3.5", price: "10.0" },
        quantity: 30,
      },
      {
        vn: "132367",
        medicine: { id: 13, name: "M3.5", price: "10.0" },
        quantity: 30,
      },
      {
        vn: "132367",
        medicine: { id: 13, name: "M3.5", price: "10.0" },
        quantity: 30,
      },
      {
        vn: "132367",
        medicine: { id: 13, name: "M3.5", price: "10.0" },
        quantity: 30,
      },
      {
        vn: "132367",
        medicine: { id: 13, name: "M3.5", price: "10.0" },
        quantity: 30,
      },
    ],
    recipt: null,
    status: "PAYMENT",
    summary: null,
    symptoms: "AAAAAAAAAAA",
    temperature: null,
    totalPrice: "0",
    treatmentResult: "AAAAAAA",
    user: {
      hn: "HN373929",
      firstName: "aoun",
      lastName: "aaa",
      gender: "M",
    },
    vn: "VN269355",
    vnType: "OPD",
  };

  const calculateTotalCost = (medicineOrders) => {
    return medicineOrders.reduce(
      (acc, item) => acc + parseFloat(item.medicine.price) * item.quantity,
      0
    );
  };
  const newData = [
    { medicine: { name: data.treatmentResult, price: 500 }, quantity: 1 },
    ...data.medicineOrders,
  ];
  const totalCost = calculateTotalCost(newData).toFixed(2);

  const tableBody = newData.map((row, index) => [
    {
      text: (index + 1).toString(),
      margin: [5, 0, 5, 0],
      fontSize: 14,
    },
    {
      text: `${row.medicine.name}`,
      margin: [5, 0, 5, 0],
      fontSize: 14,
    },
    {
      text: row.quantity.toString(),
      margin: [10, 0, 10, 0],
    },
    {
      text: parseFloat(row.medicine.price).toFixed(2),
      margin: [10, 0, 10, 0],
    },
    {
      text: (parseFloat(row.medicine.price) * row.quantity).toFixed(2),
      margin: [10, 0, 10, 0],
    },
  ]);

  // const svgBase64 = svgToBase64(mediSync);
  const firstName = data.user.firstName;
  const lastName = data.user.lastName;
  const HN = data.user.hn;
  const VN = data.vn;
  const date = new Date(data.clinic.createdAt).toLocaleDateString();

  const getDocumentDefinition = (imageBase64) => ({
    pageSize: "A4",
    pageMargins: [40, 60, 40, 60], // [left, top, right, bottom]
    content: [
      {
        "image": imageBase64, // ใส่ Base64 ของโลโก้ที่นี่
        width: 150,
        alignment: "center",
      },
      {
        text: `ชื่อ: ${firstName} ${lastName}    HN: ${HN}    เลขที่ใบเสร็จ: ${VN}`,
        style: "header",
        margin: [0, 20, 20, 0],
      },
      {
        text: `วันที่เข้ารับการรักษา: ${date}`,
        style: "header",
      },
      {
        table: {
          headerRows: 1,
          widths: ["auto", "*", "auto", "auto", "auto"],
          body: [
            [
              {
                text: "ลำดับ",
                style: "tableHeader",
                margin: [5, 0, 0, 0],
                fontSize: 14,
              },
              {
                text: "รายการ",
                style: "tableHeader",
                margin: [5, 0, 0, 0],
                fontSize: 14,
              },
              {
                text: "จำนวน",
                style: "tableHeader",
                margin: [5, 0, 10, 0],
                fontSize: 14,
              },
              {
                text: "ราคาต่อหน่วย",
                style: "tableHeader",
                margin: [5, 0, 10, 0],
                fontSize: 14,
              },
              {
                text: "ราคารวม",
                style: "tableHeader",
                margin: [5, 0, 10, 0],
                fontSize: 14,
              },
            ],
            ...tableBody, // แสดงรายการยาและจำนวนที่ได้รับพร้อมลำดับและราคาทั้งหมด
            [
              {
                text: "รวมทั้งหมด",
                colSpan: 4,
                alignment: "right",
                margin: [5, 5, 5, 5],
                fontSize: 14,
                bold: true,
              },
              {},
              {},
              {},
              {
                text: totalCost,
                margin: [10, 5, 10, 0],
                fontSize: 14,
                bold: true,
              },
            ],
          ],
        },
        layout: {
          hLineWidth: function (i, node) {
            // วาดเส้น row แค่ 2 เส้นแรก
            return i < 2 ? 1 : 0;
          },
          vLineWidth: function (i, node) {
            // ไม่วาดเส้น column
            return 0;
          },
          hLineColor: function (i, node) {
            return "black";
          },
          vLineColor: function (i, node) {
            return "black";
          },
          paddingLeft: function (i, node) {
            return 10;
          },
          paddingRight: function (i, node) {
            return 10;
          },
          paddingTop: function (i, node) {
            return 5;
          },
          paddingBottom: function (i, node) {
            return 5;
          },
        },
      },
      {
        text: "ลงชื่อผู้ออกใบเสร็จ",
        absolutePosition: { x: 30, y: 700 },
        alignment: "left",
      },
      {
        text: `พิมพ์ผลวันที่ ${date}`,
        absolutePosition: { x: 375, y: 700 },
        alignment: "right",
      },
    ],
    defaultStyle: {
      font: "THSarabunNew",
    },
    styles: {
      header: {
        fontSize: 14,
        bold: true,
        margin: [0, 0, 0, 10],
      },
      subheader: {
        fontSize: 14,
        bold: true,
        margin: [0, 10, 0, 5],
      },
      body: {
        fontSize: 14,
        margin: [0, 5, 0, 5],
      },
      tableHeader: {
        bold: true,
        fontSize: 14,
        color: "black",
      },
    },
  });

  const createPdf = async () => {
    try {
      // const imageUrl =
      //   // "https://res.cloudinary.com/didy6sdzf/image/upload/v1719565443/gcsen2pzeta7ybfurjus.jpg";
      //   "./assets/MediSync-1.jpg"
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

export default PdfMaker;

// import React, { useState, useRef } from "react";
// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";

// pdfMake.vfs = pdfFonts.pdfMake.vfs;

// const App = () => {
//   const [pdfUrl, setPdfUrl] = useState("");
//   const iframeRef = useRef(null);

//   const convertImageToBase64 = (url) => {
//     return new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest();
//       xhr.onload = () => {
//         const reader = new FileReader();
//         reader.onloadend = () => resolve(reader.result);
//         reader.readAsDataURL(xhr.response);
//       };
//       xhr.onerror = (error) => reject(error);
//       xhr.open("GET", url);
//       xhr.responseType = "blob";
//       xhr.send();
//     });
//   };

//   const createPdf = async () => {
//     try {
//       const imageUrl = "../public/MediSync-new.jpg"; // แทนที่ด้วย URL หรือ path ของภาพของคุณ
//       const imageBase64 = await convertImageToBase64(imageUrl);

//       const documentDefinition = {
//         pageSize: "A4",
//         pageMargins: [40, 60, 40, 60],
//         content: [
//           {
//             image: imageBase64,
//             width: 150,
//             alignment: "center",
//           },
//           {
//             text: "Here is some content below the image",
//             margin: [0, 20, 0, 0],
//           },
//         ],
//       };

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

//   return (
//     <div>
//       <button onClick={createPdf}>Generate PDF</button>
//       <iframe ref={iframeRef} src={pdfUrl} width="600" height="400" />
//     </div>
//   );
// };

// export default App;
