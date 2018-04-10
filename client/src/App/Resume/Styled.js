import styled from "styled-components";

const Container = styled.div`
  font-family: "Lato", sans-serif;
  height: auto;
  line-height: 1.25;

  @media screen and (min-width: 992px) {
    margin-top: 2em;
    margin-bottom: 2em;
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
  }
`;

export const ResumeContainer = styled(Container)`
  &&& {
    padding: 1em;
    user-select: text;

    @media screen and (min-width: 992px) {
      padding: 3em;
    }
  }
`;

export const Contacts = styled.div`
  padding: 0;
  margin: 0 4px;
  color: #434343;
`;

export const ResumeLinks = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

export const Section = styled.section``;

export const Achievements = styled.ul`
  padding: 0;
  padding-left: 15px;
  margin: 0;
`;

export const AchievementsEntry = styled.li`
  margin: 0.2em 0;
`;
