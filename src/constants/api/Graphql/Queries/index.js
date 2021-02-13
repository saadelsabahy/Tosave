import {gql} from '@apollo/client';

export const GET_MONTHLY = gql`
  subscription getMonthelyReportWithFilter($filter: monthely_report_bool_exp!) {
    monthely_report(where: $filter) {
      branch_id
      status
      id
      year
      updated_at
      month
      created_at
      monthely_branch {
        name
        name_en
      }
    }
  }
`;
