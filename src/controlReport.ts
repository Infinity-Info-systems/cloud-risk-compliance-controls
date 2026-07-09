import { controlRegister } from './controlRegistry';

export interface ControlReportRow {
  id: string;
  domain: string;
  control: string;
  owner: string;
  evidence: string;
  status: string;
}

export function buildControlReport() {
  const rows: ControlReportRow[] = controlRegister.controls.map((control) => ({
    id: control.id,
    domain: control.domain,
    control: control.name,
    owner: control.owner,
    evidence: control.evidence,
    status: control.status,
  }));

  return {
    title: controlRegister.repository,
    purpose: controlRegister.purpose,
    domains: controlRegister.domains,
    governanceQuestions: controlRegister.governanceQuestions,
    decisionRule: controlRegister.decisionRule,
    reportRows: rows,
  };
}

export function buildControlSummary() {
  return {
    totalControls: controlRegister.controls.length,
    implementedControls: controlRegister.controls.filter((control) => control.status === 'Implemented').length,
    reviewNeeded: controlRegister.controls.filter((control) => control.status === 'Needs Review').length,
    exceptionControls: controlRegister.controls.filter((control) => control.status === 'Exception').length,
  };
}
