## Testing Release SourceMap

**dev test**

```bash
# skaffold dev
skaffold dev --no-prune=false --cache-artifacts=false

skaffold delete
```

**port-forward**

```bash
kubectl port-forward pod/{client-depl-------} 3000:80
```
