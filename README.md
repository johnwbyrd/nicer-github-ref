# nicer-github-ref

This Github action takes one string input, with a name of 'ref', and produces one
string output, also with a name of 'ref'.

All forward slashes in the input are converted to dashes in the output.

Additionally, any prefixes of 'refs/', 'tags/', or 'heads/' are removed.

The result may be useful in sensible naming of releases on Github.

