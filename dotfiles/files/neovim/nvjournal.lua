local function new_note()
  local month = os.date("%m")
  local input = vim.fn.input("Topic: ")
  local linput = string.lower(input)
  local cleaned_input = string.gsub(linput, " ", "-")
  local filename = "~/Box/Journal/" .. month .. "-" .. cleaned_input .. ".md"
  if #linput == 0 then
    filename = "~/Box/Journal/"
  end
  vim.cmd("edit " .. filename)
end

local function setup()
  vim.api.nvim_create_user_command("Note", new_note, {})
end

return {
  setup = setup,
  new_note = new_note,
}
