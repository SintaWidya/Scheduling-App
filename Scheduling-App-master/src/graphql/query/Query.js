import { gql } from "@apollo/client";

export const GET_SCHEDULE = gql`
  query MyQuery {
    Schedule {
      id
      divisi
      tanggal
      ruangan
      keperluan
    }
  }
`;

export const GET_SCHEDULE_BY_ID = gql`
  query MyQuery($id: Int!) {
    Schedule_by_pk(id: $id) {
      id
      divisi
      tanggal
      ruangan
      keperluan
    }
  }
`;
