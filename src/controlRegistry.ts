export type ControlDomain = 'Identity' | 'Data' | 'Monitoring' | 'Response' | 'Recovery';

export type ControlStatus = 'Planned' | 'Implemented' | 'Needs Review' | 'Exception';

export interface ControlItem {
  id: string;
  domain: ControlDomain;
  name: string;
  owner: string;
  evidence: string;
  status: ControlStatus;
}

export interface ControlRegister {
  repository: string;
  purpose: string;
  domains: ControlDomain[];
  controls: ControlItem[];
  governanceQuestions: string[];
  decisionRule: string;
}

export const controlRegister: ControlRegister = {
  repository: 'Cloud Risk and Compliance Controls Framework',
  purpose:
    'Align cloud controls, ownership, evidence, and review cadence for regulated cloud environments.',
  domains: ['Identity', 'Data', 'Monitoring', 'Response', 'Recovery'],
  controls: [
    {
      id: 'ID-01',
      domain: 'Identity',
      name: 'Access review and privileged account governance',
      owner: 'Security operations',
      evidence: 'Access review report',
      status: 'Implemented',
    },
    {
      id: 'DA-01',
      domain: 'Data',
      name: 'Encryption and handling standards',
      owner: 'Data governance',
      evidence: 'Encryption validation and data handling proof',
      status: 'Implemented',
    },
    {
      id: 'MO-01',
      domain: 'Monitoring',
      name: 'Log capture and alerting coverage',
      owner: 'Platform operations',
      evidence: 'Monitoring export and alert history',
      status: 'Needs Review',
    },
    {
      id: 'RE-01',
      domain: 'Response',
      name: 'Incident response playbooks and escalation path',
      owner: 'Incident management',
      evidence: 'Runbook and incident record',
      status: 'Implemented',
    },
    {
      id: 'RC-01',
      domain: 'Recovery',
      name: 'Backup and recovery validation',
      owner: 'Resilience engineering',
      evidence: 'Recovery test result',
      status: 'Planned',
    },
  ],
  governanceQuestions: [
    'Which controls are implemented?',
    'Where is evidence missing or stale?',
    'Which controls need review or exception handling?',
    'Who owns the control and the proof?',
    'What changed since the last audit cycle?',
  ],
  decisionRule:
    'A control should not be treated as audit-ready until ownership, evidence, and review cadence are all defined.',
};

export function getControlOverview() {
  return {
    repository: controlRegister.repository,
    purpose: controlRegister.purpose,
    domainCount: controlRegister.domains.length,
    controlCount: controlRegister.controls.length,
    implementedControls: controlRegister.controls.filter((control) => control.status === 'Implemented').length,
  };
}
