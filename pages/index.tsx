import { useContext, Component } from 'react'
// import Link from "next/link"
import { LoadingOutlined, InboxOutlined } from '@ant-design/icons'
import { message, Spin, Upload } from 'antd'
import { UploadFile, UploadChangeParam } from 'antd/lib/upload/interface'
const { Dragger } = Upload

type State = {
}

// Stateful component
class IndexPage extends Component<{}, State> {
  state: State = {}

  renderLoading() {
    return <div>Please wait... &nbsp; <Spin indicator={<LoadingOutlined />} /></div>
  }

  render() {
    const props = {
      name: 'file',
      multiple: true,
      action: process.env.API_PREFIX + "/picture",
      onChange(info: UploadChangeParam<UploadFile<any>>) {
        const { status } = info.file;
        if (status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    }

    return <div id="index">
      <div id="wrapper">
        <h2>{process.env.PAGE_TITLE}</h2>

        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag pictures</p>
          <p className="ant-upload-hint">
            Support for single or bulk upload
          </p>
        </Dragger>
      </div>
    </div>
  }
}

export default IndexPage
