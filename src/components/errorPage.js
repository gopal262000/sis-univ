import { Image, Row, Col, Typography, Card } from "antd";
import errorImage from "./no-data-found.svg";
import { useRouteError } from "react-router-dom";

const ErrorPreview = () => {
  const error = useRouteError();
  return (
    <Card style={{ textAlign: "center", marginTop: "10rem" }}>
      <Image src={errorImage} preview={false} />
      <Typography.Title type="danger" level={5}>
        {error.statusText || error.message}
      </Typography.Title>
    </Card>
  );
};

export default ErrorPreview;
