import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   :root{
      /* Fonts */
      --ff-primary: 'Montserrat', sans-serif; 
      --ff-secondary: 'Poppins', sans-serif;
      --ff-accent: 'Rochester', cursive;

      /* Fonts: Line Height */
      --f-line-height-body: 1.7;
      --f-line-height-heading: 1.5;

      /* Fonts: Weight */
      --fw-body: 400;

      /* Fonts: Colors */
      --c-font: #000;
      --c-font2: #333;
      --c-font3: #474A57;
      --c-font4: #616161;
      --c-font5: #747474; 

     /* Colors */
      --c-accent: #F47920;
      --c-main: #0083CA;
      --c-ghost: rgba(196, 196, 196, 0.25);

      --c-1: #3B5E8C;
      --c-2: #3865e0;
      --c-3: #F28E13;
      --c-4: #003580; 
      --c-5: rgb(61, 145, 255);
      --c-6: #008009;
      --c-7:#0071c2;

     /* Breakpoints */
      --mobile: 320px;
      --tablet: 768px;
      --computer: 992px;
      --desktop: 1200px;
      --widescreen: 1920px;

    /* Animations */
     --animation-duration: 0.3s;
     --animation-timing: ease;

   /* Borders */
     --border: 2px solid #fff;
     --border-radius: 12px;
     --border-radius2: 16px;
     --border-color: transparent;
   }

   * {
       outline: 0;
   }

   html { 
      font-size: 62.5%;
   }

   a { 
      color: inherit; 
      text-decoration: none
   }

   button {
      cursor: pointer;
   }

   body { 
     font-family: var(--ff-primary);
     color: var(--c-font2);
     font-weight: var(--fw-body);
     line-height: var(--f-line-height-body);
     font-size: 1.6rem;
     letter-spacing: 0.015em;
     overflow-x: hidden;
   }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  padding: 0 20px;
  margin: 0 auto;
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const BaseTitle = styled.span`
  font-weight: 700;
  line-height: 1.5;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
