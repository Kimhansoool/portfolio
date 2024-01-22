import Document, { Html, Head, Main, NextScript } from 'next/document'
// styledComponent를 사용하기 위한 함수
import { ServerStyleSheet } from 'styled-components';

class MyClass extends Document {
  /** 
   * 초기화 함수(고정코드)
   * 컴포넌트 전역에서 styledComponent를 사용할 수 있게 함.
   */
  static async getInitialProps(ctx){
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        enhanceComponent: (Component) => Component,
    });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()]
    }
  }

  /** 
   * 화면 렌더링 함수 -> Html, Head, Main 첫 글자가 대문자임
   */
  render(){
    return(
      <Html>
        <Head>
          {/*
            <head>는 순수 HTML태그
            <Head>는 next.js의 컴포넌트.
            이 안에서 charset과 viewport 지정은 자동으로 이루어진다.
            그 외에 개발자가 적용하고자 하는 외부 CSS나 JS리소스 참조, SEO 구현 등을 처리할 수 있다.
          */}
          <title>document</title>

          {/* getInitialProps에서 리턴한 styleTages를 출력한다. */}
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyClass;

