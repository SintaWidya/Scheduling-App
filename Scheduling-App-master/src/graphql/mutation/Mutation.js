import { gql } from "@apollo/client";

export const INSERT_SCHEDULE = gql`
  mutation MyMutation($object: Schedule_insert_input = {}) {
    insert_Schedule_one(object: $object) {
      id
    }
  }
`;

export const DELETE_SCHEDULE = gql`
  mutation MyMutation($id: Int!) {
    delete_Schedule_by_pk(id: $id) {
      id
    }
  }
`;

export const UPDATE_SCHEDULE = gql`
  mutation MyMutation(
    $id: Int!
    $divisi: String!
    $tanggal: String!
    $ruangan: String!
    $keperluan: String!
  ) {
    update_Schedule_by_pk(
      pk_columns: { id: $id }
      _set: {
        divisi: $divisi
        tanggal: $tanggal
        ruangan: $ruangan
        keperluan: $keperluan
      }
    ) {
      id
    }
  }
`;
