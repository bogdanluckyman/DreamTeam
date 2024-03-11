import{u as i}from"./index-5a4a36f5.js";const e="/DreamTeam/assets/hero-mobile-1x-7330b8b1.jpg",n="/DreamTeam/assets/hero-mobile-2x-ab16df10.jpg",t="/DreamTeam/assets/hero-tablet-1x-42f7b539.jpg",a="/DreamTeam/assets/hero-tablet-2x-420aaa93.jpg",p="/DreamTeam/assets/hero-1x-96488495.jpg",d="/DreamTeam/assets/hero-2x-a0acb64c.jpg",r=i.div`
  @media screen and (min-width: 375px) {
    width: 375px;
    margin: 0 auto;
    /* display: flex; */
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    display: flex;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`,x=i.section`
  /* max-width: 1400px; */
  margin: 0 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    min-width: 240px;
    margin: 0 32px;
  }
  @media screen and (min-width: 1440px) {
    /* margin-left: 96px; */
  }
`,s=i.div`
  background-image: url(${e});

  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  width: 298px;
  height: 669px;
  margin-top: 180px;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${n});
  }

  @media screen and (min-width: 375px) {
    background-position-y: bottom;
    height: 681px;
    margin-top: -242px;
    margin-left: 77px;
  }
  @media screen and (min-width: 768px) {
    background-image: url(${t});
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${a});
    }

    width: 670px;
    height: 893px;
    margin-top: 46px;
    margin-left: -3px;
  }
  @media screen and (min-width: 1440px) {
    background-size: 100%;
    background-image: url(${p});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${d});
    }

    width: 670px;
    height: 800px;
    margin-left: 76px;
    margin-top: -85px;
  }
`,h=i.div`
  display: flex;
  flex-direction: column;

  gap: 70px;

  @media screen and (min-width: 768px) {
    gap: 56px;
  }
  @media screen and (min-width: 1440px) {
    gap: 39px;
  }
`,m=i.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  gap: 12px;
  /* padding: 20px; */
  border-radius: 12px;
  background: #303030;
  /* margin-left: 42px; */
  margin-top: 432px;
  width: 146px;
  height: 66px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 206px;
    height: 96px;
    margin-left: 64px;
    margin-top: 582px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 384px;
    margin-left: 0;
  }
`,g=i.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-right: auto; */
  border-radius: 50%;
  margin-left: 16px;
  /* padding: 9px; */
  background-color: #ef8964;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    /* padding: 11px; */
  }
`,c=i.svg`
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,l=i.h3`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.12;
  color: white;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
  }
`,w=i.p`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  white-space: nowrap;
  padding-top: 4px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,f=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  margin-left: 163px;

  width: 119px;
  height: 76px;

  border-radius: 12px;
  background: #ef8964;

  @media screen and (min-width: 768px) {
    width: 180px;
    height: 110px;
    gap: 12px;

    margin-right: 32px;
    margin-left: 287px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 458px;
  }
`,u=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: 18px;

  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding: 4px;
  background-color: #efa082;

  @media screen and (min-width: 768px) {
    margin-left: 28px;
    width: 24px;
    height: 24px;
  }
`,b=i.svg`
  display: block;
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,v=i.span`
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.33;
  text-transform: lowercase;
  color: white;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,k=i.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 1; /* 100% */
  letter-spacing: -1px;
  text-transform: uppercase;
  color: white;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 1.04;
  }
`,y=i.div`
  @media screen and (min-width: 375px) {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 770px;

    margin-top: 90px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 140px;
    gap: 60px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 160px;
  }
`,T=i.h1`
  width: 335px;

  font-family: inherit;
  font-size: 38px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.06;
  letter-spacing: 0.38px;
  color: #efede8;

  @media screen and (min-width: 768px) {
    width: 598px;

    font-size: 70px;
    font-weight: 500;
    line-height: 1.12;
    letter-spacing: 0.7px;
  }
`,z=i.svg`
  position: absolute;
  top: 43px;
  left: -8px;
  width: 98px;
  height: 35px;

  @media screen and (min-width: 768px) {
    top: 85px;
    left: -17px;
    width: 185px;
    height: 67px;
  }
`;export{h as B,r as C,x as H,g as I,s as R,c as S,k as T,m as V,l as a,w as b,f as c,u as d,b as e,v as f,y as g,z as h,T as i};
