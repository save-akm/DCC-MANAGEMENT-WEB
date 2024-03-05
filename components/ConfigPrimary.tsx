import { ConfigProvider } from 'antd';
import { FC, ReactNode } from 'react';

interface Props {
    children:ReactNode
}

const ConfigPrimary: FC<Props> = ({children}): JSX.Element => {
    return <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#00b96b",
      },
    }}
  >{children}</ConfigProvider>
};

export default ConfigPrimary