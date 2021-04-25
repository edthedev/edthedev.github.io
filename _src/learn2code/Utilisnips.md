# Working with Ultisnips

## Install Ultisnips

See [Ultisnips Quick Start](https://github.com/SirVer/ultisnips#quick-start).

## Add a new snippet 
A simple approach is to fork [honza/vim-snippets](https://github.com/honza/vim-snippets), and then add your new snippets in the `vim-snippets/snippets` directory.

If you need a new snippet for working with [StrapDown.js](http://http://strapdownjs.com), you might call the new snippets file `snippets/strapdown.snippets`.

In your Vim buffer, let Ultisnips know that you want to work with the new strapdown snippets within this buffer:

	UltiSnipsAddFiletypes strapdown

In this example, you most likely would prefer to invoke the contents of both `snippets/markdown.snippets` and `snippets/strapdown.snippets`:

	UltiSnipsAddFiletypes markdown.strapdown