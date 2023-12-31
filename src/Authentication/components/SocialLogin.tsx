/* eslint-disable max-len */
import React from "react";
import Svg, { Path } from "react-native-svg";
import { useTheme } from "@shopify/restyle";

import type { Theme } from "../../components/Theme";
import { Box } from "../../components/Theme";

const Google = () => (
  <Svg width="20" height="20" viewBox="0 0 512 512">
    <Path
      d="M113.47 309.408L95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
      fill="#fbbb00"
    />
    <Path
      d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
      fill="#518ef8"
    />
    <Path
      d="M416.253 455.624l.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
      fill="#28b446"
    />
    <Path
      d="M419.404 58.936l-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
      fill="#f14336"
    />
  </Svg>
);

const Facebook = () => (
  <Svg width="20" height="20" viewBox="0 0 24 24">
    <Path
      d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0 8.064 0 9.95 7.85 9.674 9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877c.188-2.824-.761-5.016 2.051-5.016z"
      fill="#3b5999"
    />
  </Svg>
);

const Apple = () => (
  <Svg width={35.676} height={35.676} viewBox="0 0 35.676 35.676">
    <Path d="M32.295 26.202c-.096.271-.189.562-.296.848-.886 2.399-2.231 4.529-3.863 6.481-.315.38-.682.724-1.061 1.043-.749.634-1.611 1.017-2.608 1.052a5.229 5.229 0 01-2.161-.394c-.502-.205-.996-.434-1.505-.619-1.652-.6-3.295-.521-4.92.121-.586.232-1.164.488-1.761.689-.692.232-1.41.326-2.141.188-.638-.119-1.196-.416-1.714-.799-.643-.476-1.183-1.056-1.688-1.67-2.391-2.916-3.996-6.213-4.771-9.906-.334-1.588-.494-3.189-.396-4.812.115-1.946.567-3.799 1.607-5.469 1.305-2.099 3.146-3.474 5.568-4.041 1.457-.343 2.874-.203 4.263.332.731.28 1.464.557 2.198.832a2.763 2.763 0 002.026-.005c.749-.286 1.499-.571 2.251-.85.771-.281 1.555-.511 2.373-.576a8.913 8.913 0 013.58.449c1.647.551 2.987 1.526 3.999 2.946l.077.113c-2.552 1.779-4.005 4.129-3.794 7.311.213 3.184 1.927 5.338 4.737 6.736zM17.98 8.253a5.448 5.448 0 002.174-.402c3.179-1.262 4.841-4.625 4.791-7.197-.004-.207-.018-.414-.027-.654-.327.049-.625.072-.911.144-2.321.569-4.107 1.864-5.281 3.961-.687 1.228-1.069 2.532-.952 3.957.008.151.063.189.206.191z" />
  </Svg>
);
const SocialIcon = ({ children }: React.PropsWithChildren) => {
  const { borderRadii } = useTheme<Theme>();
  const SIZE = borderRadii.l * 2;

  return (
    <Box
      margin="s"
      backgroundColor="white"
      width={SIZE}
      height={SIZE}
      borderRadius="l"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  );
};
export const SocialLogin: React.FC = () => {
  return (
    <Box flexDirection="row" justifyContent="center">
      <SocialIcon>
        <Facebook />
      </SocialIcon>
      <SocialIcon>
        <Google />
      </SocialIcon>
      <SocialIcon>
        <Apple />
      </SocialIcon>
    </Box>
  );
};
