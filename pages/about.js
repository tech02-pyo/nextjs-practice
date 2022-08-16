import { Divider, Header, List } from "semantic-ui-react";

export default function About() {
  return (
    <div>
      <Header as="h3" style={{ paddingTop: 40 }} color="teal">
        회사소개
      </Header>
      <Divider />
      <List>
        <List.Item>
          <List.Icon name="users" />
          <List.Content>Sementic UI</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="maker" />
          <List.Content>New York, NY</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="mail" />
          <List.Content>
            <a href="mailto:jack@sementic-ui.com">jack@sementic-ui.com</a>
          </List.Content>
        </List.Item>
      </List>
      <Header as="h3" style={{ paddingTop: 40 }} color="teal">
        문의사항
      </Header>
      <Divider />
    </div>
  );
}
