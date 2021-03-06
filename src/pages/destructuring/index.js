import React from 'react';
import { graphql } from 'gatsby';

import { Content, Title, Paragraph, Links, ContentInfos } from '../styles';
import { StyledLink } from '../../components/layout/styles';

import Iframes from '../../components/iframes/';

export default function Destructuring ({data}) {
  return (
    <Content>
      <Title>
        {data.markdownRemark.frontmatter.title}
      </Title>
      <Paragraph>
        {data.markdownRemark.frontmatter.subtitle}
      </Paragraph>
        <Iframes description="iframe destructuring 1" url="https://jsfiddle.net/leonardocesca/btk8Le1q/6/embedded/js/" />
      <Paragraph>
        {data.markdownRemark.frontmatter.explanation}
      </Paragraph>
        <Iframes description="iframe destructuring 2" url="https://jsfiddle.net/leonardocesca/gLzxme57/3/embedded/js/" />
      <ContentInfos>
        <Title>{data.markdownRemark.frontmatter.infos}</Title>
        <Links>
          <StyledLink to='destructuring/destructuring-objects/'>{data.markdownRemark.frontmatter.destructObj[0].title}</StyledLink>
        </Links>
      </ContentInfos>
    </Content>
  )
}

export const pageQuery = graphql`
  query DestructuringPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/destructuring.md/" }) {
      frontmatter {
        title
        subtitle
        explanation
        infos
        date
        destructObj {
          title
        }
      }
    }
  }
`