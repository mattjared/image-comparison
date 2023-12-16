import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { GeistMono } from 'geist/font/mono';
import { loops } from "../constant"

export default function ImageTag() {
  const codeString = `
    <img src="/some/path/to/img" width="100" height="100" alt="An amazing image" />
  `
  return (
    <div className="rounded-lg border bg-white text-card-foreground shadow-sm w-full max-w-2xl mx-auto px-4 py-2">
      <h4>Image Tag</h4>
      <SyntaxHighlighter language="javascript" style={dracula} className={`${GeistMono.className} text-xs mb-4 border rounded`}>
        {codeString}
      </SyntaxHighlighter>
      {Array.from({ length: loops }, (_, index) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={`liverpool-${index}`} src={`/liverpool/${index}.jpg`} width="1000" height="500" alt="liverpool pic" className="mb-6"/>
      ))}
    </div>
  )
}
