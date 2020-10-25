import { NextPage } from "next";
import {
  AndroidOutlined,
  AppleOutlined,
  WindowsOutlined,
  IeOutlined,
  ChromeOutlined,
  GithubOutlined,
  AliwangwangOutlined,
  DingdingOutlined,
  WeiboCircleOutlined,
  TaobaoCircleOutlined,
  Html5Outlined,
  TwitterOutlined,
  WechatOutlined,
  YoutubeOutlined,
  AlipayCircleOutlined,
  SkypeOutlined,
  QqOutlined,
  MediumOutlined,
  GitlabOutlined,
  LinkedinOutlined,
  GooglePlusOutlined,
  FacebookOutlined
} from "@ant-design/icons";
import styles from "../styles/pages/icon.module.scss";

const Icon: NextPage = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.iconLlist}>
        <li className={styles.iconItem}>
          <AndroidOutlined />
        </li>
        <li className={styles.iconItem}>
          <AppleOutlined />
        </li>
        <li className={styles.iconItem}>
          <WindowsOutlined />
        </li>
        <li className={styles.iconItem}>
          <IeOutlined />
        </li>
        <li className={styles.iconItem}>
          <ChromeOutlined />
        </li>
        <li className={styles.iconItem}>
          <GithubOutlined />
        </li>
        <li className={styles.iconItem}>
          <AliwangwangOutlined />
        </li>
        <li className={styles.iconItem}>
          <DingdingOutlined />
        </li>
        <li className={styles.iconItem}>
          <WeiboCircleOutlined />
        </li>
        <li className={styles.iconItem}>
          <TaobaoCircleOutlined />
        </li>
        <li className={styles.iconItem}>
          <Html5Outlined />
        </li>
        <li className={styles.iconItem}>
          <TwitterOutlined />
        </li>
        <li className={styles.iconItem}>
          <WechatOutlined />
        </li>
        <li className={styles.iconItem}>
          <YoutubeOutlined />
        </li>
        <li className={styles.iconItem}>
          <AlipayCircleOutlined />
        </li>
        <li className={styles.iconItem}>
          <SkypeOutlined />
        </li>
        <li className={styles.iconItem}>
          <QqOutlined />
        </li>
        <li className={styles.iconItem}>
          <MediumOutlined />
        </li>
        <li className={styles.iconItem}>
          <GitlabOutlined />
        </li>
        <li className={styles.iconItem}>
          <LinkedinOutlined />
        </li>
        <li className={styles.iconItem}>
          <GooglePlusOutlined />
        </li>
        <li className={styles.iconItem}>
          <FacebookOutlined />
        </li>
      </ul>
    </div>
  );
};

export default Icon;
