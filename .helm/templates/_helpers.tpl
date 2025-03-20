{{- define "anotations" }}
{{- end }}

{{- define "image.secrets" }}
imagePullSecrets:
  - name: registry
{{- end }}

{{- define "node.selector" }}
{{ if eq .Values.environment "prod" }}
nodeSelector:
{{- end }}
{{- end }}

{{- define "node.tolerations" }}
{{ if eq .Values.environment "prod" }}
tolerations:
{{- end }}
{{- end }}

{{- define "healthcheck" }}
{{- end }}