// TODO: video id 유효값 조회 후 notfound 페이지 전환
import React from "react";
import { useSearchParams } from "react-router-dom";
import VideoSection from "components/detail/VideoSection";
import CommentSection from "components/detail/CommentSection";
import RelatedSection from "components/detail/RelatedSection";
import styles from "styles/detail/DetailPage.module.css";

const DetailPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("id")!;

  return (
    <main className={styles["detail-main"]}>
      <section className={styles["left-section"]}>
        <VideoSection />
        <CommentSection videoId={videoId} />
      </section>
      <section className={styles["right-section"]}>
        <RelatedSection />
      </section>
    </main>
  );
};

export default DetailPage;
