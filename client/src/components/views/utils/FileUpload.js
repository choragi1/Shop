import React from 'react'
import Dropzone from 'react-dropzone'
import { AiOutlinePlus } from 'react-icons/ai'

function FileUpload() {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <div
              style={{
                width: 300,
                height: 240,
                border: "1px solid lightgray",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <AiOutlinePlus style={{fontSize : '3rem'}}/>
            </div>
          )}
        </Dropzone>
      </div>
    );
}

export default FileUpload
