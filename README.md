# Semver validation action

SEMVER validator based on [`rubenesp87/semver-validation-action`](https://github.com/rubenesp87/semver-validation-action) but with official [regex taken from semver.org](https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string).

## Inputs

### `version`

**Required** Version to validate.

## Example usage

```yaml
uses: skymatic/semver-validation-action@v3
with:
  version: ${{ github.event.release.tag_name }}
```

```yaml
uses: skymatic/semver-validation-action@v3
with:
  version: 'v0.7.9'
```

```yaml
uses: skymatic/semver-validation-action@v3
with:
  version: '0.7.9-beta.1'
```
