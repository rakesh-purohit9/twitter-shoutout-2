import React from "react";

import { Column, Row, Img, Text, Stack } from "components";

const TweetCard = (props) => {
  const { hashtag, desc } = props;

  return (
    <>
      <Column className={props.className}>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:w-[100%] w-[49%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
            <Img
              src="images/img_dhiwiselogo.png"
              className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
              alt="Dhiwiselogo One"
            />
            <Text className="flex-grow font-gilroy font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] my-[2px] not-italic text-[18px] text-white_A700">
              DhiWise
            </Text>
          </Row>
          <Text className="font-gilroy font-normal mb-[4px] md:ml-[11px] ml-[16px] sm:ml-[8px] mt-[2px] not-italic text-[16px] text-gray_400 w-[auto]">
            DhiWise
          </Text>
        </Row>
        <Column className="flex flex-col justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]">
          <Text className="font-gilroy font-normal not-italic text-[16px] text-white_A700 w-[auto]">
            {hashtag}
          </Text>
          <Text className="font-gilroy font-light leading-[24.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] text-[16px] text-white_A700 w-[100%]">
            {desc}
          </Text>
        </Column>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:w-[100%] w-[20%]">
          <Img
            src="images/img_twitter.svg"
            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
            alt="twitter One"
          />
          <Text className="flex-grow font-gilroy font-light mb-[4px] ml-[4px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-[14px] text-bluegray_100">
            Twitter
          </Text>
        </Row>
        <Column className="bg-gradient  flex flex-col items-center justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] md:p-[27px] p-[40px] sm:px-[15px] sm:py-[21px] rounded-radius8 w-[100%]">
          <Stack className="bg-black_900_66 h-[48px] p-[12px] sm:p-[6px] md:p-[8px] relative rounded-radius12 w-[35%]">
            <Img
              src="images/img_share.svg"
              className="absolute h-[24px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
              alt="share One"
            />
          </Stack>
        </Column>
      </Column>
    </>
  );
};

export default TweetCard;
