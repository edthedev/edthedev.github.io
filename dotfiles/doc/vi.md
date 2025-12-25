## Clean Microsoft Cruft from a list of emails

Clean a copied list of Microsoft Email Addresses for re-use:

If they're all on one line:

```regex
:s/[^<]+<([^>]+)>;/\1;/g
```
