import styled from 'styled-components';

const BlockStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 65px;
`;

const LinkBannerStyles = styled.div`
  background-color: #343a40;
`;

const LinkStyles = styled.a`
  margin: 0 5px;
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: underline;
    color: white;
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
