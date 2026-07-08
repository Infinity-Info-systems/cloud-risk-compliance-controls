# Control Coverage Map

This map connects the key cloud risk and compliance domains to the artifacts needed to prove control coverage.

## Purpose

Use this map to understand which controls exist, which evidence supports them, and where the gaps are.

## Coverage Summary

| Control Domain | Coverage Focus | Primary Evidence |
| --- | --- | --- |
| Security Governance | Control ownership and accountability | Ownership model |
| Compliance Alignment | HIPAA, SOC 2, FedRAMP mapping | Control matrix |
| Risk Governance | Risk register and remediation | Risk register |
| Zero Trust Controls | Access and segmentation baseline | Control review |
| Audit Readiness | Evidence and exceptions | Checklist |

## Coverage Domains

### 1. Security Governance

- control ownership
- policy enforcement
- security exception handling
- executive accountability

### 2. Compliance Alignment

- regulatory mapping
- platform control mapping
- control testing
- audit evidence collection

### 3. Risk Governance

- risk identification
- risk scoring
- residual risk review
- remediation tracking

### 4. Zero Trust Controls

- identity verification
- least privilege access
- network segmentation
- workload trust boundaries

### 5. Audit Readiness

- evidence completeness
- control testing frequency
- exception approval history
- audit response readiness

## Example Coverage View

| Domain | Coverage Focus | Evidence Artifact | Status |
| --- | --- | --- | --- |
| Security Governance | Control ownership and accountability | Ownership model | In Progress |
| Compliance Alignment | HIPAA, SOC 2, FedRAMP mapping | Control matrix | Needs Review |
| Risk Governance | Risk register and remediation | Risk register | Healthy |
| Zero Trust Controls | Access and segmentation baseline | Control review | At Risk |
| Audit Readiness | Evidence and exceptions | Checklist | In Progress |

## Operating Rhythm

Recommended cadence:

1. Weekly control and exception review
2. Monthly risk and compliance review
3. Quarterly audit readiness review
4. Event-driven review after material control changes

## Recommended Actions

- assign a named owner to each control domain
- link each control to one evidence artifact
- review unresolved exceptions with due dates
- keep control coverage visible in executive reporting
- maintain a single control vocabulary across the ecosystem
- mark any control that relies on manual evidence gathering

## Coverage Rule

No control should be considered covered until the coverage map, the evidence artifact, and the owner all agree.

## Related Artifacts

- [Security Governance Model](../governance-models/security-governance-model.md)
- [Control Ownership Model](../governance-models/control-ownership-model.md)
- [Cloud Control Matrix](./cloud-control-matrix.md)
- [HIPAA, SOC 2, and FedRAMP Alignment](./hipaa-soc2-fedramp-alignment.md)
- [Audit Readiness Checklist](../audit-readiness/audit-readiness-checklist.md)
- [Audit Evidence Template](../templates/audit-evidence-template.md)
