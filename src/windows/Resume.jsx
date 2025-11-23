import WindowWrapper from "../hoc/WindowWrapper"
import { WindowControls } from "../components/index"
import { Download } from "lucide-react";

import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url
).toString();

const Resume = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>

        <a href="files/Dusan-Aleksic-Resume.pdf" className="cursor-pointer flex items-center gap-1" title="Download Resume" download>
            <span>Dušan Aleksić - Resume</span>
            <Download className="icon" />
        </a>
      </div>

      <Document className="max-h-[550px] overflow-y-auto" file="files/Dusan-Aleksic-Resume.pdf">
        <Page 
            pageNumber={1}
            renderTextLayer
            renderAnnotationLayer
        />
      </Document>
    </>
  )
}

const ResumeWindow = WindowWrapper(Resume, 'resume');

export default ResumeWindow