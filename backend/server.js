// import 'dotenv/config'; // Load environment variables
// import OpenAI from "openai";
// import { z } from "zod";
// import { zodResponseFormat } from "openai/helpers/zod";
// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// app.use(cors());
// app.use(express.json())

// // Existing Chat Route
// app.post('/api/chat', async (req, res) => {
//     const { message, context } = req.body;

//     const companyInfo = `
//     Here is the company information:
//     - Company Name: ${context.name}
//     - Sustainability Score: ${context.score}%
//     - Climate Rating: ${context.climate}
//     - Water Rating: ${context.water}
//     - Forests Rating: ${context.forests}
//     - Warnings: ${context.warning || "None"}
//     `;

//     const openaiResponse = await openai.chat.completions.create({
//         model: "gpt-4",
//         messages: [
//             { role: "system", content: "You are a helpful assistant which answers questions related to sustainability and environment, with access to specific product information. Always answer in 1-2 lines and be factual." },
//             { role: "user", content: companyInfo },
//             { role: "user", content: message }
//         ]
//     });

//     res.json({ reply: openaiResponse.choices[0].message.content });
//     console.log("OpenAI Response:", openaiResponse.choices[0].message.content);
// });



// // Define the structure for company data using Zod
// const CompanyDataSchema = z.object({
//   companyName: z.string(),
//   mainScoreLink: z.string().nullable(),
//   mainScore: z.number(),
//   climate: z.string(),
//   water: z.string(),
//   forests: z.string(),
//   warningLink: z.string().nullable(),
//   warning: z.string(),
// });

// // GPT Company Data Route with Structured Output
// app.post("/api/gpt-company-data", async (req, res) => {
//   const { companyName } = req.body;

//   if (!companyName) {
//     return res.status(400).json({ error: "Company name is required" });
//   }

//   try {
//     const completion = await openai.beta.chat.completions.parse({
//       model: "gpt-4o-2024-08-06", // Ensure using a model supporting structured outputs
//       messages: [
//         { role: "system", content: "You are a helpful assistant providing company ESG ratings in JSON format." },
//         {
//           role: "user",
//           content: `Provide a JSON formatted summary of the ESG ratings and any known warnings for the company "${companyName}". The format should be:
//           {
//             "companyName": "${companyName}",
//             "mainScoreLink": "string or null",
//             "mainScore": 0,
//             "climate": "string",
//             "water": "string",
//             "forests": "string",
//             "warningLink": "string or null",
//             "warning": "string"
//           }
            
//           A json example:
//             {
//           "companyName": "Coca Cola",
//           "mainScoreLink": "https://www.sustainalytics.com/esg-rating/the-coca-cola-co/1007904888",
//           "mainScore": 22.5,
//           "climate": "A-",
//           "water": "A",
//           "forests": "B",
//           "warningLink": "https://www.breakfreefromplastic.org/2019/10/23/brand-audit-report-2019-press-release/",
//           "warning": "Leading plastic waste producer"
//         }
//           Try to fill it no mattewr what according to your buest guess.
//           `,
//         },
//       ],
//       response_format: zodResponseFormat(CompanyDataSchema, "company_data"),
//     });

//     const companyData = completion.choices[0].message.parsed; // Parsed JSON output from GPT
//     console.log("GPT Structured Response:", companyData);

//     return res.json(companyData);

//   } catch (error) {
//     console.error("Error querying OpenAI:", error);
//     res.status(500).json({ error: "Failed to fetch company data from GPT" });
//   }
// });


// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
// Load environment variables


// const dotenv = require("dotenv");
// dotenv.config();

// const axios = require("axios");
// const express = require("express");
// const cors = require("cors");
// const { z } = require("zod");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Initialize OpenAI configuration manually for Node 14
// const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// // Define the Zod schema for validation
// const CompanyDataSchema = z.object({
//   companyName: z.string(),
//   mainScoreLink: z.string().nullable(),
//   mainScore: z.number(),
//   climate: z.string(),
//   water: z.string(),
//   forests: z.string(),
//   warningLink: z.string().nullable(),
//   warning: z.string(),
// });

// // Chat route to get a response based on company info
// app.post('/api/chat', async (req, res) => {
//     const { message, context } = req.body;

//     const companyInfo = `
//     Here is the company information:
//     - Company Name: ${context.name}
//     - Sustainability Score: ${context.score}%
//     - Climate Rating: ${context.climate}
//     - Water Rating: ${context.water}
//     - Forests Rating: ${context.forests}
//     - Warnings: ${context.warning || "None"}
//     `;

//     try {
//         const response = await axios.post("https://api.openai.com/v1/chat/completions", {
//             model: "gpt-4",
//             messages: [
//                 { role: "system", content: "You are a helpful assistant answering questions about sustainability." },
//                 { role: "user", content: companyInfo },
//                 { role: "user", content: message }
//             ],
//         }, {
//             headers: {
//                 "Authorization": `Bearer ${OPENAI_API_KEY}`,
//                 "Content-Type": "application/json"
//             }
//         });

//         const reply = response.data.choices[0].message.content;
//         res.json({ reply });
//         console.log("OpenAI Response:", reply);
//     } catch (error) {
//         console.error("Error querying OpenAI:", error);
//         res.status(500).json({ error: "Failed to get response from GPT" });
//     }
// });

// // GPT Company Data Route with Structured Output and Error Handling
// app.post("/api/gpt-company-data", async (req, res) => {
//     const { companyName } = req.body;
  
//     if (!companyName) {
//       return res.status(400).json({ error: "Company name is required" });
//     }
  
//     try {
//       const completion = await openai.chat.completions.create({
//         model: "gpt-4",
//         messages: [
//           { role: "system", content: "You are a helpful assistant providing company ESG ratings in JSON format." },
//           {
//             role: "user",
//             content: `Provide a JSON formatted summary of the ESG ratings and any known warnings for the company "${companyName}". The format should be:
//             {
//               "companyName": "${companyName}",
//               "mainScoreLink": "string or null",
//               "mainScore": 0,
//               "climate": "string",
//               "water": "string",
//               "forests": "string",
//               "warningLink": "string or null",
//               "warning": "string"
//             }
//             A JSON example:
//             {
//               "companyName": "Coca Cola",
//               "mainScoreLink": "https://www.sustainalytics.com/esg-rating/the-coca-cola-co/1007904888",
//               "mainScore": 22.5,
//               "climate": "A-",
//               "water": "A",
//               "forests": "B",
//               "warningLink": "https://www.breakfreefromplastic.org/2019/10/23/brand-audit-report-2019-press-release/",
//               "warning": "Leading plastic waste producer"
//             }
//             Please respond with the JSON object only, without any additional text.`,
//           },
//         ],
//       });
  
//       let rawResponse = completion.choices[0].message.content;
//       console.log("Raw response from OpenAI:", rawResponse);
  
//       // Extract JSON part from response
//       const jsonMatch = rawResponse.match(/\{[\s\S]*\}/);
//       if (!jsonMatch) {
//         throw new Error("No JSON found in the response");
//       }
  
//       // Parse and validate the JSON
//       const companyData = JSON.parse(jsonMatch[0]);
//       console.log("Validated Company Data:", companyData);
  
//       return res.json(companyData);
  
//     } catch (error) {
//       console.error("Error querying OpenAI or validating response:", error);
//       res.status(500).json({ error: "Failed to fetch or parse company data from GPT" });
//     }
//   });
  

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

const dotenv = require("dotenv");
dotenv.config();

const axios = require("axios");
const express = require("express");
const cors = require("cors");
const { z } = require("zod");

const app = express();
app.use(cors());
app.use(express.json());

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Define the Zod schema for validation
const CompanyDataSchema = z.object({
  companyName: z.string(),
  mainScoreLink: z.string().nullable(),
  mainScore: z.number(),
  climate: z.string(),
  water: z.string(),
  forests: z.string(),
  warningLink: z.string().nullable(),
  warning: z.string(),
});

// Chat route to get a response based on company info
app.post('/api/chat', async (req, res) => {
  const { message, context } = req.body;

  const companyInfo = `
  Here is the company information:
  - Company Name: ${context.name}
  - Sustainability Score: ${context.score}%
  - Climate Rating: ${context.climate}
  - Water Rating: ${context.water}
  - Forests Rating: ${context.forests}
  - Warnings: ${context.warning || "None"}
  `;

  try {
    const response = await axios.post("https://api.openai.com/v1/chat/completions", {
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are a helpful assistant answering questions about sustainability. Provide short answers not more than 1-2 lines and answer with absolute certainty and never be general and try to focus on specific events or figures always to justify your answers." },
        { role: "user", content: companyInfo },
        { role: "user", content: message }
      ],
    }, {
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      }
    });

    const reply = response.data.choices[0].message.content;
    res.json({ reply });
    console.log("OpenAI Response:", reply);
  } catch (error) {
    console.error("Error querying OpenAI:", error);
    res.status(500).json({ error: "Failed to get response from GPT" });
  }
});

// GPT Company Data Route with Structured Output and Error Handling
app.post("/api/gpt-company-data", async (req, res) => {
  const { companyName } = req.body;

  if (!companyName) {
    return res.status(400).json({ error: "Company name is required" });
  }

  try {
    const response = await axios.post("https://api.openai.com/v1/chat/completions", {
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are a helpful assistant providing company ESG ratings in JSON format." },
        {
          role: "user",
          content: `Provide a JSON formatted summary of the ESG ratings and any known warnings for the company "${companyName}". The format should be:
          {
            "companyName": "${companyName}",
            "mainScoreLink": "string or null",
            "mainScore": 0,
            "climate": "string",
            "water": "string",
            "forests": "string",
            "warningLink": "string or null",
            "warning": "string"
          }
          A JSON example:
          {
            "companyName": "Coca Cola",
            "mainScoreLink": "https://www.sustainalytics.com/esg-rating/the-coca-cola-co/1007904888",
            "mainScore": 22.5,
            "climate": "A-",
            "water": "A",
            "forests": "B",
            "warningLink": "https://www.breakfreefromplastic.org/2019/10/23/brand-audit-report-2019-press-release/",
            "warning": "Leading plastic waste producer"
          }
          Please respond with the JSON object only, without any additional text. Always provide the completely filled json object in the same format and if you are not sure give your best guess but never give N/A or Unknown.`,
        },
      ],
    }, {
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      }
    });

    const rawResponse = response.data.choices[0].message.content;
    console.log("Raw response from OpenAI:", rawResponse);

    // Extract JSON part from response
    const jsonMatch = rawResponse.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("No JSON found in the response");
    }

    // Parse and validate the JSON
    const companyData = JSON.parse(jsonMatch[0]);
    console.log("Validated Company Data:", companyData);

    return res.json(companyData);

  } catch (error) {
    console.error("Error querying OpenAI or validating response:", error);
    res.status(500).json({ error: "Failed to fetch or parse company data from GPT" });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
