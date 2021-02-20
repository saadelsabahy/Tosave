import {gql} from '@apollo/client';

export const GET_MONTHLY = gql`
  subscription getMonthelyReportWithFilter($filter: monthely_report_bool_exp!) {
    reports: monthely_report(where: $filter) {
      branch_id
      status
      id
      year
      updated_at
      month
      created_at
      branch: monthely_branch {
        name
        name_en
      }
    }
  }
`;
export const GET_RISK = gql`
  subscription getRiskReportWithFilter($filter: risk_assessment_bool_exp!) {
    reports: risk_assessment(where: $filter) {
      branch_id
      state
      id
      created_at
      updated_at
      branch: risk_assessment_branch {
        name
        name_en
      }
    }
  }
`;

export const GET_TRAINING = gql`
  subscription getTrainingReportWithFilter($filter: training_report_bool_exp!) {
    reports: training_report(where: $filter) {
      id
      branch: training_branch {
        name
        name_en
      }
      status
      created_at
      updated_at
    }
  }
`;

export const GET_INCIDENTS = gql`
  subscription getIncidentReportWithFilter($filter: incident_report_bool_exp!) {
    reports: incident_report(where: $filter) {
      branch_id
      id
      branch: incident_branch {
        name_en
        name
      }
      status
      created_at
      updated_at
    }
  }
`;

export const GET_EMERGENCY = gql`
  subscription getEmergencyReportWithFilter(
    $filter: emergency_report_bool_exp!
  ) {
    reports: emergency_report(where: $filter) {
      id
      branch_id
      updated_at
      created_at
      branch: emergency_report_branch {
        name
        name_en
      }
    }
  }
`;

export const GET_MAINTENNCE = gql`
  subscription getMaintainanceReportWithFilter(
    $filter: maintainance_report_bool_exp!
  ) {
    reports: maintainance_report(where: $filter) {
      branch_id
      id
      status
      created_at
      updated_at
      branch: maintainance_branch {
        name
        name_en
      }
    }
  }
`;
