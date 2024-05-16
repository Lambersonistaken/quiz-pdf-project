import { NextRequest, NextResponse } from "next/server";
import {HumanMessage} from "@langchain/core/messages";
import {ChatOpenAI} from "@langchain/openai"  
import{PDFLoader} from "langchain/document_loaders/fs/pdf"


export async function POST(req: NextRequest) {
    const body = await req.formData();
    const document = body.get("pdf");

    try {
        const pdfLoaders = new PDFLoader(document as Blob, {
            parsedItemSeparator: " ",
        });
        const docs = await pdfLoaders.load();

        const selectedDocuments = docs.filter((doc) => doc.pageContent !== undefined);
        const texts = selectedDocuments.map((doc) => doc.pageContent);

        const prompt =  "given the text which is a summary of the document, generate a quiz based on the text. Return json only that contains a quiz object with fields: name, description and questions. The questions is an array of objects with fields: questionText, answers. The answers is an array of objects with fields: answerText, isCorrect."
         
        const model = new ChatOpenAI({
            apiKey: process.env.OPENAI_API_KEY,
            modelName: "gpt-4-1106-preview",
        });

        const message = new HumanMessage({
            content: [
                {
                    type:"text",
                    text: prompt + "\n" + texts.join("\n")
                }
            ]
        });

        const result = await model.invoke([message]);
        console.log(result);

        return NextResponse.json({message: "created successfully"}, {status: 200});

} catch(e:any ) {
        return NextResponse.json({message: e.message}, {status: 500});
}
} 