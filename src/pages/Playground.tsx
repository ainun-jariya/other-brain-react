import { Editor } from "@monaco-editor/react";
import api from "../lib/api";
import { useCallback, useState } from "react";

export default function Playground() {
    const [code, setCode] = useState("#type here...");
    const [output, setOutput] = useState("");
    
    const runCode = useCallback(async ()=>{
        try {
            const resp = await api.post('/run', {code})
            setOutput(resp.data.output)
        } catch(err: any) {
            console.log(err)
            if(err) setOutput("Error: "+ err.message)
        }
    },[code])

    return (
        <div>
            <h2>Playground</h2>
            <button onClick={runCode}>Run!</button>
            <Editor
                height="300px"
                width="100vh"
                defaultLanguage="python"
                defaultValue={code}
                onChange={(value)=>setCode(value || '')}
            />
            <div>
                <h3>Result:</h3>
                <div>{output}</div>
            </div>
        </div>
    )
}