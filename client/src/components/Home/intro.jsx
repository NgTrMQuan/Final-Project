import React from 'react';
import styles from './intro.module.scss';

const Introduction = () => {
  return (
    <div className={styles.introduction}>
      <h1>Chào mừng đến với cửa hàng tai nghe của chúng tôi!</h1>
      <p>Chúng tôi cung cấp các sản phẩm tai nghe chất lượng từ các thương hiệu hàng đầu trên thế giới. Với đội ngũ nhân viên giàu kinh nghiệm và tận tình, chúng tôi cam kết mang đến cho quý khách hàng trải nghiệm mua sắm tốt nhất.</p>
      <p>Tại cửa hàng của chúng tôi, quý khách có thể tìm thấy các sản phẩm tai nghe có chất lượng âm thanh tuyệt vời, đa dạng về mẫu mã, kiểu dáng và giá cả phù hợp với nhu cầu sử dụng của mình.</p>
      <p>Hãy khám phá các sản phẩm tại cửa hàng của chúng tôi ngay hôm nay!</p>
    </div>
  );
};

export default Introduction;
