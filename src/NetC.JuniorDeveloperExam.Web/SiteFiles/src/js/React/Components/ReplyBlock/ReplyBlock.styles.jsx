import styled from 'styled-components';

const BlockStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 65px;
`;

const LinkBannerStyles = styled.div`
  background-color: var(--darkBlue);
`;

const LinkStyles = styled.a`
  margin: 0 5px;
  text-decoration: none;
  color: var(--white);

  &:hover {
    text-decoration: underline;
    color: var(--white);
  }
`;

const ShowRepliesLinkStyles = styled(LinkStyles)`
  display: ${(props) => (props.showReplies ? 'none' : 'inline-block')};
`;

const HideRepliesLinkStyles = styled(LinkStyles)`
  display: ${(props) => (props.showReplies ? 'inline-block' : 'none')};
`;

export const ReplyBlockStyles = {
  BlockStyles,
  LinkBannerStyles,
  LinkStyles,
  ShowRepliesLinkStyles,
  HideRepliesLinkStyles,
};
