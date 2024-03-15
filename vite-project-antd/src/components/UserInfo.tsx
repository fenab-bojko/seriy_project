import { FC, CSSProperties, useState } from "react";
import { Flex, Typography, Button, Progress } from "antd";
import { AvatarContainer } from "./AvatarContainer";

type TUserInfoProps = {
  compliteCourse: number;
  currentCourse: string;
};

const userInfoStyle: CSSProperties = {
  border: "1px solid gray",
  borderRadius: "4px",
  padding: "5px",
};

export const UserInfo: FC<TUserInfoProps> = (props) => {
  const { compliteCourse, currentCourse } = props;

  const [isActiveUserInfo, setIsActiveUserInfo] = useState(true);

  const toggleActiveUserInfo = () => {
    setIsActiveUserInfo((prev) => !prev);
  };

  return (
    <Flex vertical style={userInfoStyle} gap={10}>
      <Flex style={{ cursor: "pointer" }} onClick={toggleActiveUserInfo} justify="space-between">
        <Typography.Title level={4} style={{margin: '0'}}>Основное</Typography.Title>
        {!isActiveUserInfo && currentCourse ? (
          <Flex gap={10}>
            <Typography.Title level={5} style={{ margin: "0" }}>
              {currentCourse}
            </Typography.Title>{" "}
            <Button>Запустить курс</Button>
          </Flex>
        ) : null}
      </Flex>
      {isActiveUserInfo ? (
        <Flex gap={20} align="center" justify="space-around">
          <AvatarContainer name="Тест Тестов" />
          <Flex vertical justify="space-between">
            <Typography.Title level={5}>Текущий курс: {currentCourse}</Typography.Title>
            {compliteCourse ? <Button>Продолжить обучение</Button> : <Button>Запустить курс</Button>}
          </Flex>
          <Flex gap={20}>
            <Flex vertical>
              <Progress type="circle" percent={compliteCourse} size={80} />
              <Typography.Text>Курс пройден на {compliteCourse} %</Typography.Text>
            </Flex>
            <Flex vertical>
              <Progress type="circle" percent={0} size={80} />
              <Typography.Text>Всего пройдено {} %</Typography.Text>
            </Flex>
          </Flex>
        </Flex>
      ) : null}
    </Flex>
  );
};
