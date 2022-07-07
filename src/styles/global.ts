import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
    
    :root {
        --blue: #5429CC;
        --blue-light: #6933ff;
        --green: #33CC95;
        --green-light: #8AD8BC;
        --green-dark: #12A454;
        --red: #E52E4D;

        --background: #f0f2f5;
        --shape: #FFFFFF;

        --text-tittle: #363F5F;
        --text-body: #969CB2;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }

    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background-color: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;


        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background-color: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: .25rem;
        border: none;
    }

    .react-modal-close {
        position: absolute;
        top: .5rem;
        right: .5rem;

        padding: 0.875rem;
        border: none;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;

        transition: 0.4s ease;

        &:hover {
            filter: brightness(1.1);
        }
    }
`;
