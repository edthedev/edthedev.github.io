---
layout: blog.njk
title: A Garden Slug for Luanti
tags: ['blog', 'rss']
date: 2026-02-14
---

Even in a digital world over which I have ultimate total control...I can feel a little lazy sometimes.

In particular, I'm not a huge fan of tilling soil, in my online gameplay.

Plus, what is the point of having total control of something, if one never modifies the source code to the virtual universe?

All that to say, I finally created my first mod for [Luanti](luanti.org), and it is a [Garden Slug](https://codeberg.org/EdTheDev/luanti-garden).

I am afraid that it currently features my total lack of competence in [Blender](https://www.blender.org/download/), but I should improve and the slugs may grow to be merely ugly, rather than repulsive.

But they get the job done! Drop some of these slugs in an un-tilled Luanti garden, and they will gradually till it.

And because this is still a `code` blog, here's some highlights:

```lua
mobs:register_mob('garden:slug', {
    ...
    do_custom = function(self, dtime)
       -- Yes, I borrowed code from a chicken!
       self.egg_timer = (self.egg_timer or 0) + dtime
       if self.egg_timer < 2 then return end
       self.egg_timer = 0
       local pos = self.object:get_pos()
       local pos_down = vector.subtract(pos, vector.new(0,1,0))
       local sittin_on = core.get_node({x = pos_down.x, y = pos_down.y, z = pos_down.z})
       -- core.chat_send_all('Sittin on ..' .. sittin_on.name)
       if sittin_on.name == 'default:dirt' or sittin_on.name == 'default:dirt_with_grass' then
         core.set_node({x = pos_down.x, y = pos_down.y, z = pos_down.z}, {name = "farming:soil"})
       end
    end,
    drops = {
        {name = 'garden:slug', chance = 1, min = 1, max = 3},
        {name = 'garden:grass', chance = 1, min = 0, max = 3},
        {name = 'mesecons_materials:glue', chance = 1, min = 0, max = 3},
    },
})
```

Huge thank you to [Nathan Salapat](https://www.nathansalapat.com/) for [Luanti Modding Tutorial Videos](https://www.nathansalapat.com/minetest/modding)], [Andrew Ward](https://rubenwardy.com/) for [The Luanti Modding Book](https://rubenwardy.com/minetest_modding_book/en/index.html), and everyone at the [Luanti Forums](https://forum.luanti.org)
